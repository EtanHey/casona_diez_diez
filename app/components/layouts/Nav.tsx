import React from "react";
import MenuButton from "../buttons/MenuButton";
import CallReservationButton from "../buttons/CallReservationButton";

const Nav = ({ changeMenuState }: { changeMenuState: () => void }) => {
  return (
    <div className="bg-cdd-black flex h-9 w-full flex-row place-content-between place-items-center px-4 py-2">
      <CallReservationButton />
      <MenuButton changeMenuState={changeMenuState} />
    </div>
  );
};

export default Nav;
