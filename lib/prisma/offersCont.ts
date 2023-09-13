import { Offer } from "@prisma/client";
import prisma from ".";

export async function getOffer(): Promise<{
  offer?: Offer;
  error?: any;
}> {
  try {
    const offer = await prisma.offer.findFirstOrThrow();
    return { offer };
  } catch (error) {
    return { error };
  }
}

export async function updateOffer(offer: Offer) {
  try {
    const updatedOffer = await prisma.offer.update({
      where: { id: offer.id },
      data: { ...offer },
    });
    return { offer: updatedOffer };
  } catch (error) {
    return { error };
  }
}
