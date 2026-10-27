import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserByLoginInfo } from "./prisma";

const header = Buffer.from(
  JSON.stringify({ alg: "HS256", typ: "JWT" }),
).toString("base64url");
const lifetime = 300;

export function createAdminSession(
  username: string,
  secret: string,
  now = Date.now(),
) {
  if (!secret) throw new Error("Admin authentication unavailable");
  const payload = Buffer.from(
    JSON.stringify({
      username,
      exp: Math.floor(now / 1000) + lifetime,
      aud: "casona-admin",
    }),
  ).toString("base64url");
  const input = `${header}.${payload}`;
  return `${input}.${createHmac("sha256", secret).update(input).digest("base64url")}`;
}

export function validateAdminSession(
  token: string | undefined,
  secret: string | undefined,
  now = Date.now(),
): string | null {
  if (!token || !secret || token.length > 4096) return null;
  const [receivedHeader, payload, signature, extra] = token.split(".");
  if (
    extra !== undefined ||
    receivedHeader !== header ||
    !payload ||
    !signature ||
    !/^[A-Za-z0-9_-]+$/.test(payload) ||
    !/^[A-Za-z0-9_-]{43}$/.test(signature)
  )
    return null;
  const expected = createHmac("sha256", secret)
    .update(`${header}.${payload}`)
    .digest("base64url");
  if (
    signature.length !== expected.length ||
    !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  )
    return null;
  try {
    const session: unknown = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    );
    if (typeof session !== "object" || session === null) return null;
    if (!("aud" in session) || session.aud !== "casona-admin") return null;
    if (
      !("username" in session) ||
      typeof session.username !== "string" ||
      !session.username
    )
      return null;
    if (
      !("exp" in session) ||
      typeof session.exp !== "number" ||
      !Number.isSafeInteger(session.exp)
    )
      return null;
    return session.exp > Math.floor(now / 1000) ? session.username : null;
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  return validateAdminSession(
    (await cookies()).get("admin")?.value,
    process.env.JWT_SECRET,
  );
}

export async function requireAdminPage(lang: string) {
  const username = await getAdminSession();
  if (!username) redirect(`/${lang === "en" ? "en" : "es"}/admin`);
  return username;
}

export async function requireAdminAction() {
  if (!(await getAdminSession())) throw new Error("Unauthorized");
}

export async function authenticateAdmin(username: unknown, password: unknown) {
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !username ||
    !password
  )
    return null;
  const result = await getUserByLoginInfo({
    username: username.toLowerCase(),
    password,
  });
  return result.data?.username ?? null;
}

export async function setAdminCookie(username: string) {
  const token = createAdminSession(username, process.env.JWT_SECRET ?? "");
  (await cookies()).set("admin", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: lifetime,
    expires: new Date(Date.now() + lifetime * 1000),
  });
}
