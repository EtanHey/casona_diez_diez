import CreateOfferForm from "@/app/components/adminComponents/offers/CreateOfferForm";
import React from "react";
export type Offer = {
  _id: string;
  offer: string;
};

const getOffers = async (): Promise<Offer[]> => {
  const res = await fetch("/api/admin/dashboard/offers", {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
const page = async () => {
  const offers = await getOffers();
  return (
    <div>
      <CreateOfferForm />
      <div className="flex w-full flex-col">
        {offers.map((offerObject) => {
          return <p>{offerObject.offer}</p>;
        })}
      </div>
    </div>
  );
};

export default page;
