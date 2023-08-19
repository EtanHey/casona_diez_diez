import React from "react";
import MenuButton from "../buttons/MenuButton";
import CallReservationButton from "../buttons/CallReservationButton";

const Nav = () => {
  return (
    <div className="bg-cdd-black flex h-9 w-full flex-row place-items-center place-content-between px-4 py-2">
      <CallReservationButton />
      <MenuButton />
    </div>
  );
};

export default Nav;
