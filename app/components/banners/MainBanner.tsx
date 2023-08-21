import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-cdd-black absolute left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full p-4 ">
      <p className="text-center font-extralight sm:text-base text-sm text-white">
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
