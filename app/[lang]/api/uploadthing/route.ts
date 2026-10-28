import { createNextRouteHandler } from "uploadthing/next";
import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
const handler = createNextRouteHandler({
  router: ourFileRouter,
});

export const GET = handler.GET;
export async function POST(req: NextRequest) {
  // UploadThing 5 callbacks are unsigned, so every POST needs an admin session.
  if (!(await getAdminSession()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return handler.POST(req);
}
