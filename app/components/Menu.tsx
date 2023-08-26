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
    <div className={`fixed top-0 z-50`}>
      <span
        onClick={changeMenuState}
        className={`${
          menuState ? "opacity-20" : "opacity-0"
        } block h-screen w-screen bg-black transition-opacity duration-500`}
      ></span>
      <div
        className={` fixed right-0 top-0 flex h-0 min-h-full min-w-25/40 flex-col items-start gap-5 overflow-y-hidden bg-cdd-black  p-0 uppercase text-white
        transition-transform duration-1000
        ${menuState ? "-translate-x-0" : "translate-x-full"}
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
