import { updateOffer } from "@/lib/prisma";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const newOffer: { text: string; id: string } = await req.json();
    const {offer, error} = await updateOffer(newOffer);
    if (error) {
      console.log(error);
      throw new Error("Failed updating offer");
    }
    return new Response(JSON.stringify(offer), {
      status: 200,
    })
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}

