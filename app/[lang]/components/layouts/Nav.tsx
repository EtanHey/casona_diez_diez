import React from "react";
import MenuButton from "../buttons/MenuButton";
import CallReservationButton from "../buttons/CallReservationButton";
import NavigationMenu from "../NavigationMenu";
import LocaleSwitcher from "../LocaleSwitcher";
import { NavDictType } from "../stateful_wrapper/MenuStateWrapper";

export type MenuToggleProps = { changeMenuState: () => void };

const Nav = ({
  changeMenuState,
  navDict,
}: {
  changeMenuState: () => void;
  navDict: NavDictType;
}) => {
  return (
    <div className="fixed z-[50] flex h-9 w-full flex-row place-content-between place-items-center bg-cdd-black px-4 py-2">
      <LocaleSwitcher />
      <CallReservationButton navDict={navDict} />
      <MenuButton changeMenuState={changeMenuState} />
      <NavigationMenu
        navDict={navDict}
      />
    </div>
  );
};

export default Nav;
