import React from "react";
import MenuButton from "../buttons/MenuButton";
import CallReservationButton from "../buttons/CallReservationButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type MenuToggleProps = { changeMenuState: () => void };

const Nav = ({ changeMenuState }: MenuToggleProps) => {
  const page = usePathname()?.split("/")[1];
  return (
    <div className="fixed z-50 flex h-9 w-full flex-row place-content-between place-items-center bg-cdd-black px-4 py-2">
      <CallReservationButton />
      <MenuButton changeMenuState={changeMenuState} />
      <div className="wrapper scrollbar-none hidden h-0 min-h-full items-center gap-9 overflow-y-scroll text-sm font-normal text-white lg:flex">
        <Link className={`${page === "" ? "text-cdd-red" : ""}`} href="/">
          {/* HOME PAGE */}
          Portada
        </Link>
        <Link
          className={`${page === "rooms" ? "text-cdd-red" : ""}`}
          href="/rooms"
        >
          Habitaciones
        </Link>
        <Link
          className={`${page === "location" ? "text-cdd-red" : ""}`}
          href="/location"
        >
          Ubicaión
        </Link>
        <Link
          className={`${page === "contact" ? "text-cdd-red" : ""}`}
          href="/contact"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Nav;
