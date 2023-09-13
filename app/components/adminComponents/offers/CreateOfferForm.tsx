"use client";
import React from "react";

const CreateOfferForm = () => {
  const handleCreateOffer = async(ev: React.BaseSyntheticEvent) => {
    ev.preventDefault();
    const newOffer = ev.target.newOffer.value;
    const result = await fetch("/api/admin/dashboard/offers", {
      method: "POST",
      body: JSON.stringify({ newOffer }),
    })
    console.log(result);
  };
  return (
    <form
      className="flex justify-center gap-4 bg-cdd-green"
      onSubmit={handleCreateOffer}
    >
      <div className="flex flex-col">
        <label htmlFor="newOffer">New Offer</label>
        <textarea rows={2} cols={50} name="newOffer" id="newOffer" />
      </div>
      <button
        className="rounded-full bg-cdd-black px-4 text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateOfferForm;
