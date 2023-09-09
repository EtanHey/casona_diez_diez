"use client";
import React from "react";
import Times from "./svgs/Times";
import NavigationMenu from "./NavigationMenu";

type MenuProps = {
  menuState: boolean;
  changeMenuState: () => void;
};
const Menu = ({ menuState, changeMenuState }: MenuProps) => {
  return (
    <div className={`fixed top-0 z-50 md:hidden`}>
      <span
        onClick={changeMenuState}
        className={`${
          menuState ? "block" : "hidden"
        } block h-screen w-screen bg-black opacity-20 transition-opacity duration-300`}
      ></span>
      <div
        className={` fixed right-0 top-0 flex h-0 min-h-full min-w-25/40 flex-col items-start gap-5 overflow-y-hidden bg-cdd-black  p-0 uppercase text-white
        transition-transform duration-300
        ${menuState ? "-translate-x-0" : "translate-x-full"}
        `}
      >
        <button onClick={changeMenuState} className="p-[10px]">
          <Times />
        </button>
        <NavigationMenu changeMenuState={changeMenuState} />
      </div>
    </div>
  );
};

export default Menu;
