import CreateOfferForm from "@/app/components/adminComponents/offers/CreateOfferForm";
import OfferPicker from "@/app/components/adminComponents/offers/OfferPicker";
import React from "react";
export type Offer = {
  _id: string;
  offer: string;
};

export const getOffers = async (): Promise<any> => {
};
const page = async () => {
  return (
    <div>
      <CreateOfferForm />
      <OfferPicker />
    </div>
  );
};

export default page;
