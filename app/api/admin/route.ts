import clientPromise from "@/lib/mongodb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const client = await clientPromise;
    const db = client.db("casonaDiezDiez");
    const result = await db
      .collection("users")
      .findOne({ username, password }, { projection: { password: 0 } });
    console.log(result);

    if (result) {
      const user = result.username;
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
      });
    }
    throw new Error("User not found");
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), {
      status: 404,
    });
  }
}
