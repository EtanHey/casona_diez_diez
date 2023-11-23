// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
// try {
//   if (request.nextUrl.pathname === "/admin") {
//     return NextResponse.next();
//   }
//   const cookie = request.cookies.get("admin");
//   if (cookie && cookie.name === "admin" && cookie.value) {
//     return NextResponse.next();
//   }
//   request.nextUrl.pathname = "/admin";
//   return NextResponse.redirect(request.nextUrl.toString());
// } catch (error) {
//   console.log(error, "middleware error");
// }
// }

// export const config = {
//   matcher: "/admin/:path*",
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
console.log(request.headers);

  
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new negotiator({ headers: negotiatorHeaders }).languages();
  console.log("languages", languages);
  console.log("locales", locales);
  console.log("i18n.defaultLocale", i18n.defaultLocale);

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale: any) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
