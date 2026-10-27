import { Offer } from "@prisma/client";
import prisma from ".";
import { reportServiceError } from "../service-errors";

export async function getOffers(
  readOffers: () => Promise<Offer[]> = () => prisma.offer.findMany(),
): Promise<{
  offers: Offer[];
  error?: string;
}> {
  try {
    return { offers: await readOffers() };
  } catch (error) {
    return { error: reportServiceError("offers", error), offers: [] };
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
