import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    if (request.nextUrl.pathname === "/admin") {
      return NextResponse.next();
    }
    const cookie = request.cookies.get("admin");
    if (cookie && cookie.name === "admin" && cookie.value) {
      return NextResponse.next();
    }
    request.nextUrl.pathname = "/admin";
    return NextResponse.redirect(request.nextUrl.toString());
  } catch (error) {
    console.log(error, 'middleware error');
  }
}

export const config = {
  matcher: "/admin/:path*",
};
