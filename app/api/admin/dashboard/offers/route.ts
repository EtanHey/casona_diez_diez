import clientPromise from "@/lib/mongodb";
import { NextRequest } from "next/server";
const connectToCollection = async () => {
  const client = await clientPromise;
  const db = client.db("casonaDiezDiez");
  return db.collection("offers");
};
export async function POST(req: NextRequest) {
  try {
    const collection = await connectToCollection();
    const { newOffer }: { newOffer: string } = await req.json();
    const result = await collection.insertOne({ newOffer });
    if (result) {
      const offerId = result.insertedId;
      const offer = await collection.findOne({ _id: offerId });
      return new Response(JSON.stringify(offer), {
        status: 200,
      });
    }
    throw new Error("Failed creating offer");
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}

export async function GET() {
  try {
    const collection = await connectToCollection();
    const result = collection.find({});
    console.log(result);

    if (result) {
      return new Response(JSON.stringify(result), {
        status: 200,
      });
    }
    throw new Error("Failed getting offers");
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}
