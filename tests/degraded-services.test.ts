import assert from "node:assert/strict";
import { mock, test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import MainBanner from "../app/[lang]/components/banners/MainBanner";
import { getOffers } from "../lib/prisma/offersCont";
import { getReviews } from "../lib/actions";

test("a DNS failure hides offers without leaking the database error to render", async () => {
  const log = mock.method(console, "error", () => {});
  try {
    const result = await getOffers(async () => {
      throw new Error("getaddrinfo ENOTFOUND secret-database-host");
    });
    assert.deepEqual(result, { offers: [], error: "DNS_UNAVAILABLE" });
    assert.equal(
      renderToStaticMarkup(MainBanner({ offer: { offer: result.offers[0] } })),
      "",
    );
    assert.deepEqual(log.mock.calls[0].arguments, [
      "Casona optional service unavailable",
      { service: "offers", code: "DNS_UNAVAILABLE" },
    ]);
  } finally {
    log.mock.restore();
  }
});

test("an available offer still renders", async () => {
  const offer = { id: "test", lang: "es", text: "Welcome offer" };
  const result = await getOffers(async () => [offer]);
  assert.equal(result.error, undefined);
  assert.match(
    renderToStaticMarkup(MainBanner({ offer: { offer: result.offers[0] } })),
    /Welcome offer/,
  );
});

test("a rejected reviews key omits reviews and logs only a classification", async () => {
  const log = mock.method(console, "error", () => {});
  const fetch = mock.method(
    globalThis,
    "fetch",
    async () => new Response(JSON.stringify({ status: "REQUEST_DENIED" })),
  );
  try {
    assert.deepEqual(await getReviews(), []);
    assert.deepEqual(log.mock.calls[0].arguments, [
      "Casona optional service unavailable",
      { service: "reviews", code: "AUTH_UNAVAILABLE" },
    ]);
  } finally {
    fetch.mock.restore();
    log.mock.restore();
  }
});
