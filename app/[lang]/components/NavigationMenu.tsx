import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavDictType } from "./stateful_wrapper/MenuStateWrapper";

const NavigationMenu = ({
  changeMenuState,
  navDict,
}: {
  changeMenuState?: () => void;
  navDict: NavDictType;
}) => {
  const page = usePathname()?.split("/")[2];
  const lang = usePathname()?.split("/")[1];

  return (
    <div
      className={`wrapper scrollbar-none ${
        changeMenuState ? "flex w-full flex-col" : "hidden"
      } h-0 min-h-full items-center gap-9 overflow-y-scroll text-sm font-normal uppercase text-white md:flex`}
    >
      <Link
        onClick={changeMenuState}
        className={`${page === "" ? "text-cdd-red" : ""}`}
        href={`/${lang}/`}
      >
        {/* HOME PAGE */}
        {navDict.home}
      </Link>
      <Link
        onClick={changeMenuState}
        className={`${page === "rooms" ? "text-cdd-red" : ""}`}
        href={`/${lang}/rooms`}
      >
        {navDict.rooms}
      </Link>
      <Link
        onClick={changeMenuState}
        className={`${page === "location" ? "text-cdd-red" : ""}`}
        href={`/${lang}/location`}
      >
        {navDict.location}
      </Link>
      <Link
        onClick={changeMenuState}
        className={`${page === "contact" ? "text-cdd-red" : ""}`}
        href={`/${lang}/contact`}
      >
        {navDict.contact}
      </Link>
    </div>
  );
};

export default NavigationMenu;
