import { NextRequest } from "next/server";
import { utapi } from "uploadthing/server";

export async function POST(req: NextRequest) {
  console.log("here");

  try {
    const { fileKey, newName } = await req.json();
    if (fileKey && newName) {
      const res = await utapi.renameFile({ fileKey, newName });
      return new Response(JSON.stringify(res), {
        status: 200,
      })
    }
    throw new Error("User not found");
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}
