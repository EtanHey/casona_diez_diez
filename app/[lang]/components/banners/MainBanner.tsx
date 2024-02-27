import { Offer } from "@prisma/client";
import React from "react";

const MainBanner = async ({
  offer: { offer, error },
}: {
  offer: { offer?: Offer; error?: Error };
}) => {
  if ((error && !offer) || error || !offer) throw error;
  return (
    <div className="absolute left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cdd-black p-4 ">
      <p className="w-full break-words text-center text-sm font-extralight uppercase text-white md:text-base lg:text-lg xl:text-xl">
        {/* ANUNCIOS
        <span className="text-cdd-green"> NUEVOS </span>Y
        <span className="text-cdd-yellow"> OFERTAS </span>SE ESCRIBEN AQUÍ EN 2
        ORACIONES! */}
        {offer.text}
      </p>
    </div>
  );
};

export default MainBanner;
