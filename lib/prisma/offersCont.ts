import { Offer } from "@prisma/client";
import prisma from ".";

export async function getOffer(lang: string): Promise<{
  offer?: Offer;
  error?: any;
}> {
  try {
    const offers = await prisma.offer.findMany();
    const currentOffer = offers.findIndex((predicate) =>
      predicate.lang.startsWith(lang),
    );
    const offer = offers[currentOffer] || offers[0];
    return { offer };
  } catch (error) {
    return { error };
  }
}

export async function updateOffer(offer: Offer) {
  try {
    const updatedOffer = await prisma.offer.update({
      where: { id: offer.id },
      data: { text: offer.text },
    });
    return { offer: updatedOffer };
  } catch (error) {
    console.log(error);

    return { error };
  }
}
