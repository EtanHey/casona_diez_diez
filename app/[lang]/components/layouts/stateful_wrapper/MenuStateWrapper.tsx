"use client";
import React, { useState } from "react";
import Nav from "../Nav";
import Menu from "../../Menu";

export type NavDictType = {
  home: string;
  rooms: string;
  location: string;
  contact: string;
  callReservation: string;
};

const MenuStateWrapper = ({ navDict }: { navDict: NavDictType }) => {
  const [menuState, setMenuState] = useState(false);
  const changeMenuState = () => {
    setMenuState(!menuState);
  };
  return (
    <>
      <Nav changeMenuState={changeMenuState} navDict={navDict} />
      <Menu
        menuState={menuState}
        changeMenuState={changeMenuState}
        navDict={navDict}
      />
    </>
  );
};

export default MenuStateWrapper;
