import BackButton from "@/app/[lang]/components/BackButton";
import UpdateOfferForm from "@/app/[lang]/components/adminComponents/offers/UpdateOfferForm";
import { handleUpdateOffer } from "@/lib/actions";
import { getOffers } from "@/lib/prisma";
import React from "react";

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const { offers, error } = await getOffers();
  if (error || offers.length === 0)
    return <p>Offers are currently unavailable.</p>;
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
