import BackButton from "@/app/[lang]/components/BackButton";
import UpdateOfferForm from "@/app/[lang]/components/adminComponents/offers/UpdateOfferForm";

import { getOffer } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
export type Offer = {
  _id: string;
  offer: string;
};

const page = async ({ params:{ lang} }: { params: { lang: string } }) => {
  const { offer, error } = await getOffer(lang);
  if ((error && !offer) || error || !offer) throw error;
  return (
    <div className="flex w-full flex-col items-center">
      <BackButton />
      <UpdateOfferForm offer={offer} />
      <div className="w-full">
        <h3 className="text-xl font-bold underline">Oferta actual:</h3>
        <p className="w-full break-words p-2 uppercase">"{offer.text}"</p>
      </div>
    </div>
  );
};

export default page;
