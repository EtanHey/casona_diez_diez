"use client";
import Image from "next/image";
import React from "react";
import { PhotoFromServer } from "../types";

const Galary = ({ photos }: { photos: Array<PhotoFromServer> }) => {
  return (
    <div>
      {photos.map((photo) => {
        return (
          <Image
            key={photo.key}
            src={photo.url}
            alt={photo.key}
            width={100}
            height={100}
          />
        );
      })}
    </div>
  );
};

export default Galary;
