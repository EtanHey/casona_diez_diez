import { NextRequest } from "next/server";
import jwt from "jwt-simple";
import { getUserByLoginInfo } from "@/lib/prisma";
const secret = process.env.JWT_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const result = await getUserByLoginInfo({ username, password });
    console.log("result", result);

    if (result && result.data && secret) {
      console.log("result.data.username", result.data.username);
      const admin = jwt.encode(result.data.username, secret);
      if (admin) {
        return new Response(JSON.stringify({ ok: true, admin }), {
          status: 200,
        });
      }
    }
    throw new Error("User not found");
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}
