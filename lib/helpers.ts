import { Offer } from "@prisma/client";

export const findOffer = (offers: Offer[], lang: string) => {
  return (
    offers.find((predicate) => predicate.lang.startsWith(lang)) || offers[0]
  );
};
