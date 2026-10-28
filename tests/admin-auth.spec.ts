import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createHmac } from "node:crypto";
import { NextRequest } from "next/server";

const state = vi.hoisted(() => ({
  cookie: undefined as string | undefined,
  setCookie: vi.fn(),
  updateOffer: vi.fn(async () => ({ updatedOffer: { id: "test" } })),
  getUserByLoginInfo: vi.fn(),
  getOffers: vi.fn(async () => ({ offers: [] })),
  renameFile: vi.fn(async () => ({ success: true })),
  deleteFiles: vi.fn(async () => ({ success: true })),
}));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: () => (state.cookie ? { value: state.cookie } : undefined),
    set: state.setCookie,
  }),
}));
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("../lib/prisma", () => ({
  updateOffer: state.updateOffer,
  getUserByLoginInfo: state.getUserByLoginInfo,
  getOffers: state.getOffers,
}));
vi.mock("uploadthing/server", async (importOriginal) => ({
  ...(await importOriginal<typeof import("uploadthing/server")>()),
  utapi: { renameFile: state.renameFile, deleteFiles: state.deleteFiles },
}));

import DashboardLayout from "../app/[lang]/admin/dashboard/layout";
import Dashboard from "../app/[lang]/admin/dashboard/page";
import Images from "../app/[lang]/admin/dashboard/images/page";
import Offers from "../app/[lang]/admin/dashboard/offers/page";
import { DELETE, PUT } from "../app/[lang]/api/admin/dashboard/images/route";
import { POST as loginApi } from "../app/[lang]/api/admin/route";
import { ourFileRouter } from "../app/[lang]/api/uploadthing/core";
import { POST as uploadApi } from "../app/[lang]/api/uploadthing/route";
import { handleUpdateOffer, login } from "../lib/actions";
import { createAdminSession, validateAdminSession } from "../lib/admin-auth";

const secret = "test-only-existing-signing-secret";
const params = (lang = "es") => Promise.resolve({ lang });
const request = (body: unknown, method = "POST", path = "admin") =>
  new NextRequest(`https://example.com/es/api/${path}`, {
    method,
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
const upload = () =>
  ourFileRouter.imageUploader._def.middleware({
    req: new NextRequest("https://example.com/es/api/uploadthing"),
    res: undefined,
    event: undefined,
  });

beforeEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
  state.cookie = undefined;
  state.getUserByLoginInfo.mockResolvedValue({ error: "Invalid credentials" });
  vi.stubEnv("JWT_SECRET", secret);
});
afterEach(() => vi.restoreAllMocks());

describe("server admin boundary", () => {
  it("redirects an unauthenticated dashboard request before rendering children", async () => {
    await expect(
      DashboardLayout({
        children: "protected dashboard",
        params: Promise.resolve({ lang: "es" }),
      }),
    ).rejects.toThrow("NEXT_REDIRECT");
  });

  it("rejects an unauthenticated offer mutation before writing", async () => {
    const data = new FormData();
    data.set("newOffer", "attacker-controlled text");
    data.set("lang", "es");
    await expect(
      handleUpdateOffer(data, { id: "test", lang: "es", text: "old" }),
    ).rejects.toThrow("Unauthorized");
    expect(state.updateOffer).not.toHaveBeenCalled();
  });

  for (const lang of ["es", "en"]) {
    for (const cookie of [
      undefined,
      "invalid",
      createAdminSession("admin", secret, Date.now() - 301_000),
    ]) {
      it(`protects every ${lang} dashboard page for cookie ${cookie?.slice(0, 8) ?? "missing"}`, async () => {
        state.cookie = cookie;
        for (const page of [Dashboard, Images, Offers]) {
          await expect(page({ params: params(lang) })).rejects.toMatchObject({
            digest: expect.stringContaining(`/${lang}/admin;`),
          });
        }
        expect(state.getOffers).not.toHaveBeenCalled();
      });
    }
  }

  it("allows a signed session to render protected content and update an offer", async () => {
    state.cookie = createAdminSession("admin", secret);
    await expect(
      DashboardLayout({ children: "protected", params: params() }),
    ).resolves.toBeTruthy();
    await expect(Offers({ params: params() })).resolves.toBeTruthy();
    await handleUpdateOffer(new FormData(), {
      id: "test",
      text: "old",
      lang: "es",
    });
    expect(state.updateOffer).toHaveBeenCalledOnce();
  });

  for (const [method, handler] of [
    ["PUT", PUT],
    ["DELETE", DELETE],
  ] as const) {
    it(`rejects unauthenticated ${method} before reading the body or reaching UploadThing`, async () => {
      const response = await handler(
        request("not-json", method, "admin/dashboard/images"),
      );
      expect(response.status).toBe(401);
      expect(state.renameFile).not.toHaveBeenCalled();
      expect(state.deleteFiles).not.toHaveBeenCalled();
    });
    it(`allows authenticated ${method} through the same boundary`, async () => {
      state.cookie = createAdminSession("admin", secret);
      const response = await handler(
        request(
          { fileKey: "test", newName: "new" },
          method,
          "admin/dashboard/images",
        ),
      );
      expect(response.status).toBe(200);
      expect(
        method === "PUT" ? state.renameFile : state.deleteFiles,
      ).toHaveBeenCalledOnce();
    });
  }

  it("requires a signed session for upload initiation", async () => {
    await expect(upload()).rejects.toMatchObject({ code: "FORBIDDEN" });
    state.cookie = createAdminSession("admin", secret);
    await expect(upload()).resolves.toEqual({ userId: "admin" });
  });

  it("blocks the SDK failure action before it can reach the provider", async () => {
    const response = await uploadApi(
      new NextRequest(
        "https://example.com/es/api/uploadthing?actionType=failure&slug=imageUploader",
        { method: "POST", body: "not-json" },
      ),
    );
    expect(response.status).toBe(401);
  });

  it.each([
    { cookie: undefined, status: 401 },
    { cookie: "forged-cookie", status: 401 },
    { cookie: createAdminSession("admin", secret), status: 200 },
  ])("requires admin authorization for callbacks: $status", async ({ cookie, status }) => {
    vi.stubEnv("UPLOADTHING_SECRET", "test-only-uploadthing-secret");
    state.cookie = cookie;
    const resolver = vi.spyOn(ourFileRouter.imageUploader, "resolver");
    const payload = {
      file: { url: "https://example.com/file" },
      metadata: { userId: "test" },
    };
    for (const signature of ["", `hmac-sha256=${"0".repeat(64)}`]) {
      const req = request(
        payload, "POST", "uploadthing?slug=imageUploader&actionType=failure",
      );
      req.headers.set("uploadthing-hook", "callback");
      if (signature) req.headers.set("x-uploadthing-signature", signature);
      const response = await uploadApi(req);
      expect(response.status).toBe(status);
      expect(req.bodyUsed).toBe(status === 200);
    }
    if (status === 401) expect(resolver).not.toHaveBeenCalled();
    else expect(resolver).toHaveBeenCalledWith(payload);
  });
});

describe("session integrity and login", () => {
  it("accepts a valid signature and rejects tampering, expiry, missing keys and malformed cookies", () => {
    const now = Date.now();
    const token = createAdminSession("admin", secret, now);
    expect(validateAdminSession(token, secret, now)).toBe("admin");
    expect(validateAdminSession(token, "wrong", now)).toBeNull();
    expect(validateAdminSession(token, undefined, now)).toBeNull();
    expect(validateAdminSession(token, secret, now + 300_000)).toBeNull();
    for (const value of [
      undefined,
      "",
      "bad",
      token + ".extra",
      token.slice(0, -1),
      token.replace(/.$/, "!"),
      token.split(".").slice(0, 2).join(".") + "." + "é".repeat(43),
    ]) {
      expect(validateAdminSession(value, secret, now)).toBeNull();
    }
    const [header, payload] = token.split(".");
    const changed = `${header}.${Buffer.from(JSON.stringify({ username: "attacker", exp: Math.floor(now / 1000) + 300 })).toString("base64url")}`;
    expect(
      validateAdminSession(`${changed}.${token.split(".")[2]}`, secret, now),
    ).toBeNull();
    const legacy = `${header}.${Buffer.from(JSON.stringify("admin")).toString("base64url")}`;
    expect(
      validateAdminSession(
        `${legacy}.${createHmac("sha256", secret).update(legacy).digest("base64url")}`,
        secret,
        now,
      ),
    ).toBeNull();
    expect(
      validateAdminSession(
        `${Buffer.from('{"alg":"none"}').toString("base64url")}.${payload}.`,
        secret,
        now,
      ),
    ).toBeNull();
  });

  for (const kind of ["action", "api"]) {
    it(`mints an expiring HttpOnly Secure SameSite cookie after valid ${kind} credentials`, async () => {
      vi.stubEnv("NODE_ENV", "production");
      state.getUserByLoginInfo.mockResolvedValue({
        data: { username: "admin" },
      });
      const credentials = { username: "ADMIN", password: "test-password" };
      if (kind === "action") {
        const data = new FormData();
        Object.entries(credentials).forEach(([key, value]) =>
          data.set(key, value),
        );
        expect(await login(data)).toBe(true);
      } else {
        const response = await loginApi(request(credentials));
        expect(await response.json()).toEqual({ ok: true });
      }
      expect(state.getUserByLoginInfo).toHaveBeenCalledWith({
        username: "admin",
        password: "test-password",
      });
      const [name, token, options] = state.setCookie.mock.calls[0];
      expect(name).toBe("admin");
      expect(validateAdminSession(token, secret)).toBe("admin");
      expect(options).toMatchObject({
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: 300,
        expires: expect.any(Date),
      });
    });
  }

  it("rejects invalid login input and failed credentials without issuing a cookie", async () => {
    const response = await loginApi(
      request({ username: { not: "a string" }, password: "test" }),
    );
    expect(response.status).toBe(401);
    expect(state.getUserByLoginInfo).not.toHaveBeenCalled();
    const data = new FormData();
    data.set("username", "admin");
    data.set("password", "wrong");
    expect(await login(data)).toBe(false);
    expect(state.setCookie).not.toHaveBeenCalled();
  });
});
