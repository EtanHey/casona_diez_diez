import clientPromise from "@/lib/mongodb";
import { NextRequest } from "next/server";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export async function POST(req: NextRequest, res: NextRequest) {
  try {
    const { username, password } = await req.json();
    const client = await clientPromise;
    const db = client.db("casonaDiezDiez");
    const result = await db
      .collection("users")
      .findOne({ username, password }, { projection: { password: 0 } });
    if (result && secret) {
      const admin = jwt.encode(result.username, secret);
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
