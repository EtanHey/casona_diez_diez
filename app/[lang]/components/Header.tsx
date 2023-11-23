import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-center text-[2rem] font-semibold uppercase">
    {children}
  </h1>;
};

export default Header;
