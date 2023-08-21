"use client";
import Link from "next/link";
import React from "react";
import Times from "./svgs/Times";
import { usePathname } from "next/navigation";

const Menu = ({
  menuState,
  changeMenuState,
}: {
  menuState: boolean;
  changeMenuState: () => void;
}) => {
  const pathname = usePathname();
  const page = pathname?.split("/")[1];
  return (
    <div
      className={`fixed top-0 z-50 h-0 min-h-full w-screen justify-end
    ${menuState ? "flex" : "hidden"}
    `}
    >
      <span
        onClick={changeMenuState}
        className="h-full w-full bg-black opacity-20"
      ></span>
      <div
        className={`min-w-25/40 top-0 flex h-0 min-h-full flex-col items-start gap-5 overflow-y-hidden bg-cdd-black  p-0 uppercase text-white
        transition-opacity duration-1000
        ${menuState ? "opacity-100" : "opacity-0"}
        `}
      >
        <button onClick={changeMenuState} className="p-[10px]">
          <Times />
        </button>
        <div className="wrapper scrollbar-none flex h-0 min-h-full w-full flex-col items-center gap-9 overflow-y-scroll text-sm font-normal">
          <Link
            onClick={changeMenuState}
            className={`${page === "" ? "text-cdd-red" : ""}`}
            href="/"
          >
            HOME PAGE
          </Link>
          <Link
            onClick={changeMenuState}
            className={`${page === "services" ? "text-cdd-red" : ""}`}
            href="/services"
          >
            SERVICIOS
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
            className={`${page === "galary" ? "text-cdd-red" : ""}`}
            href="/galary"
          >
            Galeria
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
            className={`${page === "reviews" ? "text-cdd-red" : ""}`}
            href="/reviews"
          >
            Reseñas
          </Link>
          <Link
            onClick={changeMenuState}
            className={`${page === "contact" ? "text-cdd-red" : ""}`}
            href="/contact"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
