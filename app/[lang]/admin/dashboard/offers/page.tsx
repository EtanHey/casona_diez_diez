import BackButton from "@/app/[lang]/components/BackButton";
import UpdateOfferForm from "@/app/[lang]/components/adminComponents/offers/UpdateOfferForm";
import { handleUpdateOffer } from "@/lib/actions";
import { getOffers } from "@/lib/prisma";
import { Offer } from "@prisma/client";
import React from "react";

const page = async ({ params: { lang } }: { params: { lang: string } }) => {
  const { offers, error }: { offers: Offer[]; error?: any } = await getOffers();
  if ((error && offers) || error || !offers) throw error;
  return (
    <div className="flex w-full flex-col items-center text-center">
      <BackButton />
      <UpdateOfferForm
        lang={lang}
        offers={offers}
        handleUpdateOffer={handleUpdateOffer}
      />
    </div>
  );
};

export default page;
