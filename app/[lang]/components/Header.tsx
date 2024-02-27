import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-center text-[2rem] font-semibold uppercase sm:mb-4 sm:text-4xl md:mb-6 lg:text-5xl">
      {children}
    </h1>
  );
};

export default Header;
