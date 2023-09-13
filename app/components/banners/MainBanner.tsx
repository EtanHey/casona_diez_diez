import React from "react";

const MainBanner = () => {
  return (
    <div className="absolute left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cdd-black p-4 ">
      <p className="text-center text-sm  font-extralight text-white md:text-base lg:text-lg xl:text-xl">
        ANUNCIOS
        <span className="text-cdd-green"> NUEVOS </span>Y
        <span className="text-cdd-yellow"> OFERTAS </span>SE ESCRIBEN AQUÍ EN 2
        ORACIONES!
      </p>
    </div>
  );
};

export default MainBanner;
