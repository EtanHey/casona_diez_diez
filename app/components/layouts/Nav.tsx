import React from "react";
import MenuButton from "../buttons/MenuButton";
import CallReservationButton from "../buttons/CallReservationButton";
import NavigationMenu from "../NavigationMenu";

export type MenuToggleProps = { changeMenuState: () => void };

const Nav = ({ changeMenuState }: MenuToggleProps) => {
  return (
    <div className="fixed z-[70] flex h-9 w-full flex-row place-content-between place-items-center bg-cdd-black px-4 py-2">
      <CallReservationButton />
      <MenuButton changeMenuState={changeMenuState} />
      <NavigationMenu />
    </div>
  );
};

export default Nav;
