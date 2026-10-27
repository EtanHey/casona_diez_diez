import { NextRequest, NextResponse } from "next/server";
import { authenticateAdmin, setAdminCookie } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  try {
    const input: unknown = await req.json();
    if (
      typeof input !== "object" ||
      input === null ||
      !("username" in input) ||
      !("password" in input)
    )
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    const username = await authenticateAdmin(input.username, input.password);
    if (!username)
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    await setAdminCookie(username);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Login unavailable" }, { status: 401 });
  }
}
