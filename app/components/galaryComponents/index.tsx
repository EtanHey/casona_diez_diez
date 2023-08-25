"use client";
import { PhotoFromServer } from "@/app/types";
import Image from "next/image";
import React from "react";
const Galary = ({ photos }: { photos: Array<PhotoFromServer> }) => {
  return (
    <div className="flex w-full justify-center place-items-center">
      {photos.map((photo, index) => {
        return (
          <Image
            key={photo.key}
            src={photo.url}
            alt={photo.key}
            width={1000}
            height={1000}
            layout="responsive"
          />
        );
      })}
    </div>
  );
};
export default Galary;
