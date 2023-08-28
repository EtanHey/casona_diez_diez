"use client";

import { PhotoFromServer } from "@/app/types";
import Image from "next/image";
import React from "react";
const Galary = ({
  photos,
  currentPhoto,
  changeZoom,
}: {
  photos: Array<PhotoFromServer>;
  currentPhoto: number;
  changeZoom: () => void;
}) => {
  return (
    // work on responsiveness - container hight for each breakpoint
    photos.map((photo, index) => {
      return (
        <Image
          onClick={changeZoom}
          className={` transition-opacity duration-700
            ${index === currentPhoto ? "opacity-100" : "opacity-0"}`}
          fill
          objectFit="cover"
          key={photo.key}
          src={photo.url}
          alt={photo.key}
        />
      );
    })
  );
};
export default Galary;
