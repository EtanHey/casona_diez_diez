import { NextRequest, NextResponse } from "next/server";
import { utapi } from "uploadthing/server";
import { getAdminSession } from "@/lib/admin-auth";

export async function PUT(req: NextRequest) {
  if (!(await getAdminSession()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { fileKey, newName } = await req.json();
    if (fileKey && newName) {
      const res = await utapi.renameFile({ fileKey, newName });
      return new Response(JSON.stringify(res), {
        status: 200,
      });
    }
    throw new Error("Renaming didn't work out");
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await getAdminSession()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { fileKey } = await req.json();
    if (fileKey) {
      const res = await utapi.deleteFiles(fileKey);
      return new Response(JSON.stringify(res), {
        status: 200,
      });
    }
    throw new Error("Deleting didn't work out");
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}
