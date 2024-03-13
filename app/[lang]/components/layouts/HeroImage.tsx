"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Offer } from "@prisma/client";
import { PhotoFromServer } from "../../../types";
import MainBanner from "../banners/MainBanner";
import ReserveButton from "../buttons/ReserveButton";
import CddDarkLogo from "../svgs/CddDarkLogo";

const HeroImage = ({
  photos,
  offer,
  dict: {
    common: { reserveButtonText, CddLogo },
  },
}: {
  photos: Array<PhotoFromServer>;
  offer: { offer?: Offer; error?: Error };
  dict: { common: { reserveButtonText: string; CddLogo: string } };
}) => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  const page = pathname?.split("/")[2] ? pathname?.split("/")[2] : "";
  const photo =
    photos.find(
      (photo) =>
        photo.key.includes(`${page}`) && photo.key.includes("hero_image"),
    ) || photos.find((photo) => photo.key.includes("hero_image"));
  return (
    <div className="mt-9 h-full w-full">
      <div className="relative left-1/2 h-[303.552px] w-[458.30400000000003px] -translate-x-1/2 overflow-hidden xs:h-96 xs:w-full">
        <Image
          src={photo ? photo.url : "/hero_image.jpg"}
          alt="Loby picture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="/hero_image.jpg"
        />
        <div className="tint fixed top-0 z-0  h-full w-full bg-[#721800] opacity-30"></div>
        <Link
          href="/"
          aria-label="CDD Logo"
          aria-describedby="CDD Logo"
          className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        >
          <label htmlFor="CDD Logo" className="sr-only">
            {CddLogo}
          </label>
          <CddDarkLogo />
        </Link>
        <ReserveButton text={reserveButtonText} />
      </div>
      <MainBanner offer={offer} />
    </div>
  );
};

export default HeroImage;
