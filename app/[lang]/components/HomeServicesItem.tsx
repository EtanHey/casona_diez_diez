import React, { ReactNode } from "react";

const HomeServicesItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex place-items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase">
      {children}
    </div>
  );
};

export default HomeServicesItem;
