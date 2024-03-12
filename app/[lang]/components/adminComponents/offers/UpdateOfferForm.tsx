"use client";
import { findOffer } from "@/lib/helpers";
import { Offer } from "@prisma/client";
import React, { useEffect, useState } from "react";

const UpdateOfferForm = ({
  offers,
  lang,
  handleUpdateOffer,
}: {
  offers: Offer[];
  lang: string;
  handleUpdateOffer: (formData: FormData, offer: Offer) => Promise<void>;
}) => {
  const [offer, setOffer] = useState<Offer>(findOffer(offers, lang));
  useEffect(() => {
    setOffer(findOffer(offers, offer.lang));
  }, [offers, lang]);
  const [value, setValue] = useState(offer.text);
  const getLanguages = (): { name: string; shortHand: string }[] => {
    return offers.map((offer) => {
      return {
        name: offer.lang,
        shortHand: offer.lang.slice(0, 2),
      };
    });
  };
  const languages = getLanguages();

  const handleOfferLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setValue(findOffer(offers, e.target.value).text);
    setOffer(findOffer(offers, e.target.value));
  };

  return (
    <>
      <form
        className="flex w-full flex-col justify-center gap-2 bg-cdd-green px-4 py-2"
        action={(formData: FormData) => handleUpdateOffer(formData, offer)}
      >
        <div className="flex flex-col">
          <label htmlFor="newOffer">Offerta nueva:</label>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-xl"
            rows={2}
            name="newOffer"
            id="newOffer"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lang">Idioma:</label>
          <select
            className="rounded-xl"
            name="lang"
            id="lang"
            defaultValue={offer.lang}
            onChange={handleOfferLanguageChange}
          >
            <option value={offer.lang}>{offer.lang}</option>
            {languages.map(
              (language) =>
                language.name !== offer.lang && (
                  <option key={language.shortHand} value={language.shortHand}>
                    {language.name}
                  </option>
                ),
            )}
          </select>
        </div>
        <button
          className="rounded-full bg-cdd-black px-4 text-white"
          type="submit"
        >
          Enviar {offer.lang}
        </button>
      </form>
      <div className="w-full">
        <h3 className="text-xl font-bold underline">Oferta actual:</h3>
        <p className="w-full break-words p-2 uppercase">"{offer.text}"</p>
      </div>
    </>
  );
};

export default UpdateOfferForm;
