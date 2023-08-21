import React from "react";
import HamburgerLogo from "../svgs/HamburgerLogo";

const MenuButton = ({ changeMenuState }: { changeMenuState: () => void }) => {
  return (
    <button onClick={changeMenuState}>
      <HamburgerLogo />
    </button>
  );
};

export default MenuButton;
