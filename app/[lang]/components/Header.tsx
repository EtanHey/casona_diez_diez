import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-center text-[2rem] font-semibold uppercase sm:text-4xl sm:mb-4 md:mb-6 lg:text-5xl">
      {children}
    </h1>
  );
};

export default Header;
