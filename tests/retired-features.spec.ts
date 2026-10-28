import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
vi.mock("../lib/actions", () => ({ getPhotos: vi.fn(async () => []) }));
vi.mock("../lib/prisma", () => {
  throw new Error("Public home must not load Prisma");
});
vi.mock("next/navigation", () => ({ usePathname: () => "/es" }));
import Home from "../app/[lang]/page";
import HeroImage from "../app/[lang]/components/layouts/HeroImage";
import { getDictionary } from "../app/[lang]/dictionaries";
import sitemap from "../app/[lang]/sitemap";
async function resolveServerComponents(node: ReactNode): Promise<ReactNode> {
  if (!isValidElement<{ children?: ReactNode }>(node)) return node;
  if (
    typeof node.type === "function" &&
    node.type.constructor.name === "AsyncFunction"
  ) {
    return resolveServerComponents(
      await Reflect.apply(node.type, undefined, [node.props]),
    );
  }
  const children = await Promise.all(
    Children.toArray(node.props.children).map(resolveServerComponents),
  );
  return cloneElement(node, {}, ...children);
}

describe("retired offers and reviews", () => {
  for (const lang of ["en", "es"]) {
    it(`renders the ${lang} home without offers or reviews services`, async () => {
      const html = renderToStaticMarkup(
        await resolveServerComponents(
          await Home({ params: Promise.resolve({ lang }) }),
        ),
      );
      expect(html).not.toMatch(/Reviews|Reseñas|Welcome offer/);
      const dict = await getDictionary(lang);
      const hero = renderToStaticMarkup(HeroImage({ photos: [], dict }));
      expect(hero).toContain("hero_image.jpg");
      expect(dict.home).not.toHaveProperty("reviewSection");
    });
  }
  it("removes the admin offers route and sitemap entry", () => {
    expect(existsSync("app/[lang]/admin/dashboard/offers/page.tsx")).toBe(
      false,
    );
    expect(sitemap().some(({ url }) => url.includes("offers"))).toBe(false);
    expect(
      readFileSync("app/[lang]/admin/dashboard/page.tsx", "utf8"),
    ).not.toContain("offers");
  });
  it("keeps the shared public layout independent of offers", () => {
    expect(readFileSync("app/[lang]/layout.tsx", "utf8")).not.toMatch(
      /getOffers|@\/lib\/prisma|offer=/,
    );
  });
});
