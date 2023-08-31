"use client";
import Image from "next/image";
import React from "react";
import CddDarkLogo from "./svgs/CddDarkLogo";
import ReserveButton from "./buttons/ReserveButton";
import MainBanner from "./banners/MainBanner";
import { usePathname } from "next/navigation";
import { PhotoFromServer } from "../types";

const HeroImage = ({ photos }: { photos: Array<PhotoFromServer> }) => {
  // const pathname = usePathname();
  // const page = pathname?.split("/")[1];
  // const photo = photos.find((photo) => photo.key.includes(`${page}`));
  // console.log(photos);
  console.log(photos);

  // console.log(photo);

  return (
    <div className="mt-9 h-full w-full">
      <div className="relative left-1/2 h-fit max-h-80 w-[458.30400000000003px] -translate-x-1/2 overflow-hidden xs:w-fit">
        <Image
          className="md:-translate-y-1/4 lg:-translate-y-1/2 xl:-translate-y-1/3"
          src={"/hero_picture.jpg"}
          alt="Loby picture"
          height={303.552}
          width={458.30400000000003}
          layout="responsive"
        />
        <div className="tint fixed top-0 z-0 h-full w-full bg-[#721800] opacity-30"></div>
        <CddDarkLogo className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
        <ReserveButton />
      </div>
      <MainBanner />
    </div>
  );
};

export default HeroImage;
