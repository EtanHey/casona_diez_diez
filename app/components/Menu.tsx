"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
      className={`absolute top-0 z-50  h-full w-full transition-opacity duration-1000
    ${menuState ? "flex" : "hidden"}
    `}
    >
      <div className="w-full bg-red-900 opacity-10"></div>
      <div
        className={`bg-cdd-black w-25/40 top-0 flex h-0 min-h-full flex-col items-start gap-5 overflow-y-hidden  p-0 uppercase text-white transition-all duration-1000

      `}
      >
        <button onClick={changeMenuState} className="p-[10px]">
          <Times />
        </button>
        <div className="wrapper scrollbar-none flex h-0 min-h-full w-full flex-col items-center gap-9 overflow-y-scroll text-sm font-normal">
          <Link className={`${page === "" ? "text-cdd-red" : ""}`} href="/">
            HOME PAGE
          </Link>
          <Link
            className={`${page === "services" ? "text-cdd-red" : ""}`}
            href="/services"
          >
            SERVICIOS
          </Link>
          <Link
            className={`${page === "rooms" ? "text-cdd-red" : ""}`}
            href="/rooms"
          >
            Habitaciones
          </Link>
          <Link
            className={`${page === "galary" ? "text-cdd-red" : ""}`}
            href="/galary"
          >
            Galeria
          </Link>
          <Link
            className={`${page === "location" ? "text-cdd-red" : ""}`}
            href="/location"
          >
            Ubicaión
          </Link>
          <Link
            className={`${page === "reviews" ? "text-cdd-red" : ""}`}
            href="/reviews"
          >
            Reseñas
          </Link>
          <Link
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
