import React from "react";
import HamburgerLogo from "../svgs/HamburgerLogo";
import { MenuToggleProps } from "../layouts/Nav";

const MenuButton = ({ changeMenuState }: MenuToggleProps) => {
  return (
    <button className="md:hidden" onClick={changeMenuState}>
      <HamburgerLogo />
    </button>
  );
};

export default MenuButton;
