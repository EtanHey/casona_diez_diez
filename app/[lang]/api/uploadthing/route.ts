import { createNextRouteHandler } from "uploadthing/next";
import { NextRequest } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
const handler = createNextRouteHandler({
  router: ourFileRouter,
});

export const GET = handler.GET;
export async function POST(req: NextRequest) {
  // Provider completion callbacks only reach the existing log-only resolver.
  if (
    req.headers.get("uploadthing-hook") !== "callback" &&
    !(await getAdminSession())
  )
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  return handler.POST(req);
}
