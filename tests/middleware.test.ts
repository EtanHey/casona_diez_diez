import assert from "node:assert/strict";
import test from "node:test";
import { NextRequest } from "next/server";
import { middleware } from "../middleware";

for (const [header, expected] of [
  [undefined, "es"],
  ["*", "es"],
  ["en-US,en;q=0.9", "en"],
  ["es-AR,es;q=0.9", "es"],
  ["fr", "es"],
  ["invalid_locale,en;q=0.8", "en"],
] as const) {
  test(`Accept-Language ${header ?? "(missing)"} redirects to ${expected}`, () => {
    const headers = header ? { "accept-language": header } : undefined;
    const response = middleware(
      new NextRequest("https://example.com/rooms", { headers }),
    );
    assert.equal(response?.status, 307);
    assert.equal(
      response?.headers.get("location"),
      `https://example.com/${expected}/rooms`,
    );
  });
}

for (const locale of ["es", "en"]) {
  test(`/${locale} passes through without negotiating a locale`, () => {
    assert.equal(
      middleware(new NextRequest(`https://example.com/${locale}`)),
      undefined,
    );
  });
}
