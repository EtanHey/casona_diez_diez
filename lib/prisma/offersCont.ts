import { Offer } from "@prisma/client";
import prisma from ".";

export async function getOffers(): Promise<{
  offers: Offer[];
  error?: any;
}> {
  try {
    const offers = await prisma.offer.findMany();

    const offer = offers[0];
    if (offer) return { offers };
    else return { offers };
  } catch (error) {
    return { error, offers: [{ text: "", id: "1", lang: "" }] as Offer[] };
  }
}

export async function updateOffer(offer: Offer) {
  try {
    const updatedOffer = await prisma.offer.update({
      where: { id: offer.id },
      data: { text: offer.text },
    });
    return { updatedOffer };
  } catch (error) {
    console.log(error);

    return { error };
  }
}
