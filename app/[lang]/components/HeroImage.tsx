"use client";
import Image from "next/image";
import React from "react";
import CddDarkLogo from "./svgs/CddDarkLogo";
import ReserveButton from "./buttons/ReserveButton";
import MainBanner from "./banners/MainBanner";
import { usePathname } from "next/navigation";
import { PhotoFromServer } from "../types";
import Link from "next/link";
import { Offer } from "@prisma/client";

const HeroImage = ({
  photos,
  offer,
}: {
  photos: Array<PhotoFromServer>;
  offer: { offer?: Offer; error?: Error };
}) => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  const page = pathname?.split("/")[1];
  const photo = photos.find(
    (photo) =>
      photo.key.includes(`${page}`) && photo.key.includes("hero_image"),
  );
  return (
    <div className="mt-9 h-full w-full">
      <div className="relative left-1/2 h-[303.552px] w-[458.30400000000003px] -translate-x-1/2 overflow-hidden xs:h-96 xs:w-full">
        <Image
          src={photo ? photo.url : "/hero_image.jpg"}
          alt="Loby picture"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="/hero_image.jpg"
        />
        <div className="tint fixed top-0 z-0  h-full w-full bg-[#721800] opacity-30"></div>
        <Link
          href="/"
          className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        >
          <CddDarkLogo />
        </Link>
        <ReserveButton />
      </div>
      <MainBanner offer={offer} />
    </div>
  );
};

export default HeroImage;
