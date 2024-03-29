"use client";

import Image from "next/image";
import React from "react";
import { GallerySliderProps } from ".";
const GallerySlider = ({
  photos,
  currentPhoto,
  changeZoom,
}: GallerySliderProps) => {
  return (
    // work on responsiveness - container hight for each breakpoint
    photos.map((photo, index) => {
      return (
        <Image
          // onClick={changeZoom}
          className={` object-cover transition-opacity duration-700
            ${index === currentPhoto ? "opacity-100" : "opacity-0"}`}
          fill
          sizes="( max-width: 768px ) 100vw,"
          key={photo.key}
          src={photo.url}
          alt={photo.key}
        />
      );
    })
  );
};
export default GallerySlider;
