"use client";
import Image from "next/image";
import React from "react";
import CddDarkLogo from "./svgs/CddDarkLogo";
import ReserveButton from "./buttons/ReserveButton";
import MainBanner from "./banners/MainBanner";
import { usePathname } from "next/navigation";
import { PhotoFromServer } from "../types";

const HeroImage = ({ photos }: { photos: Array<PhotoFromServer> }) => {
  const pathname = usePathname();
  const page = pathname?.split("/")[1];
  const photo = photos.find(
    (photo) =>
      photo.key.includes(`${page}`) && photo.key.includes("hero_image"),
  );
  return (
    <div className="mt-9 h-full w-full">
      <div className="relative left-1/2 h-[303.552px] w-[458.30400000000003px] -translate-x-1/2 overflow-hidden xs:h-96 xs:w-full">
        <Image
          src={`${photo ? photo.url : "/hero_picture.jpg"}`}
          alt="Loby picture"
          fill
          sizes="( max-width: 768px ) 100vw, ( max-width: 1024px ) 50vw, 100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="tint fixed top-0 z-0  h-full w-full bg-[#721800] opacity-30"></div>
        <CddDarkLogo className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
        <ReserveButton />
      </div>
      <MainBanner />
    </div>
  );
};

export default HeroImage;
