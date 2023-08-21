"use client";
import React, { useState } from "react";
import Nav from "../layouts/Nav";
import Menu from "../Menu";

const MenuStateWrapper = () => {
  const [menuState, setMenuState] = useState(false);

  const changeMenuState = () => {
    setMenuState(!menuState);
  };
  return (
    <>
      <Nav changeMenuState={changeMenuState} />
      <Menu menuState={menuState} changeMenuState={changeMenuState} />
    </>
  );
};

export default MenuStateWrapper;
