import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationMenu = ({
  changeMenuState,
}: {
  changeMenuState?: () => void;
}) => {
  const page = usePathname()?.split("/")[1];

  return (
    <div
      className={`wrapper scrollbar-none ${
        changeMenuState ? "flex w-full flex-col" : "hidden"
      } h-0 min-h-full items-center gap-9 overflow-y-scroll text-sm font-normal uppercase text-white md:flex`}
    >
      <Link
        onClick={changeMenuState}
        className={`${page === "" ? "text-cdd-red" : ""}`}
        href="/"
      >
        {/* HOME PAGE */}
        Inicio
      </Link>
      <Link
        onClick={changeMenuState}
        className={`${page === "rooms" ? "text-cdd-red" : ""}`}
        href="/rooms"
      >
        Habitaciones
      </Link>
      <Link
        onClick={changeMenuState}
        className={`${page === "location" ? "text-cdd-red" : ""}`}
        href="/location"
      >
        Ubicaión
      </Link>
      <Link
        onClick={changeMenuState}
        className={`${page === "contact" ? "text-cdd-red" : ""}`}
        href="/contact"
      >
        Contacto
      </Link>
    </div>
  );
};

export default NavigationMenu;
