import UpdateOfferForm from "@/app/components/adminComponents/offers/UpdateOfferForm";
import { getOffer } from "@/lib/prisma";
import React from "react";
export type Offer = {
  _id: string;
  offer: string;
};

const page = async () => {
  const { offer, error } = await getOffer();
  if ((error && !offer) || error || !offer) throw error;
  return (
    <div className="flex w-full flex-col items-center">
      <UpdateOfferForm offer={offer} />
      <div className="w-full">
        <h3 className="text-xl font-bold underline">Oferta actual:</h3>
        <p className="w-full break-words p-2 uppercase">"{offer.text}"</p>
      </div>
    </div>
  );
};

export default page;
