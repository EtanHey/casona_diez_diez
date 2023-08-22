import React, { ReactNode } from "react";

const HomeServicesItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex place-items-center gap-2 text-xs uppercase">
      {children}
    </div>
  );
};

export default HomeServicesItem;
