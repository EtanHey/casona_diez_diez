import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if(request.nextUrl.pathname === "/admin") {
    return NextResponse.next();
  }
  const cookie = request.cookies.get("admin");
  if (cookie && cookie.name === "admin" && cookie.value) {
    return NextResponse.next();
  }
  request.nextUrl.pathname = "/admin";
  return NextResponse.redirect(request.nextUrl.toString());
}

export const config = {
  matcher: "/admin/:path*",
};
