"use client";
import { Offer } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UpdateOfferForm = ({ offer }: { offer: Offer }) => {
  const [value, setValue] = useState(offer.text);
  const router = useRouter();
  const handleUpdateOffer = async (ev: React.BaseSyntheticEvent) => {
    ev.preventDefault();
    const newOffer = ev.target.newOffer.value;
    const result = await fetch("/api/admin/dashboard/offers", {
      method: "POST",
      body: JSON.stringify({ text: newOffer, id: offer.id, lang:"es" }),
    });
    if (result.status === 200) {
      ev.target.reset();
      router.refresh();
    }
  };
  return (
    <form
      className="flex w-full flex-col justify-center gap-2 bg-cdd-green px-4 py-2"
      onSubmit={handleUpdateOffer}
    >
      <div className="flex flex-col">
        <label htmlFor="newOffer">Offerta nueva:</label>
        <textarea
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-xl"
          rows={2}
          name="newOffer"
          id="newOffer"
        />
      </div>
      <button
        className="rounded-full bg-cdd-black px-4 text-white"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default UpdateOfferForm;
