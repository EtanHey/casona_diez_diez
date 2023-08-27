
import { PhotoFromServer } from "@/app/types";
import Image from "next/image";
import React from "react";
const Galary = ({
  photos,
  currentPhoto,
}: {
  photos: Array<PhotoFromServer>;
  currentPhoto: number;
}) => {
  return (
    // work on responsiveness - container hight for each breakpoint
    <div className="relative flex h-96 w-full place-items-center justify-center">
      {photos.map((photo, index) => {
        return (
          <Image
            className={` transition-opacity duration-700
            ${index === currentPhoto ? "opacity-100" : "opacity-0"}`}
            objectFit="contain"
            key={photo.key}
            src={photo.url}
            alt={photo.key}
            fill={true}
          />
        );
      })}
    </div>
  );
};
export default Galary;
