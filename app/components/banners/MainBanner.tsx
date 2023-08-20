import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-cdd-black absolute left-1/2 z-30 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-3 ">
      <p className="text-center font-extralight text-base text-white">
        ANUNCIOS
        <span className="text-cdd-green"> NUEVOS </span>
        Y
        <span className="text-cdd-yellow"> OFERTAS </span>SE ESCRIBEN AQUÍ EN 2
        ORACIONES!
      </p>
    </div>
  );
};

export default MainBanner;
