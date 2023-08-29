import React from "react";
import HamburgerLogo from "../svgs/HamburgerLogo";
import { MenuToggleProps } from "../layouts/Nav";

const MenuButton = ({ changeMenuState }: MenuToggleProps) => {
  return (
    <button onClick={changeMenuState}>
      <HamburgerLogo />
    </button>
  );
};

export default MenuButton;
