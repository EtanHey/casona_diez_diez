"use client";
import React from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import ColoredBreak from "../../ColoredBreak";
import { PhotoFromServer } from "@/app/[lang]/types";
import Gallery, { GalleryDict } from "../../gallery";

const HomeGallerySec = ({
  dict,
  photos,
}: {
  dict: GalleryDict;
  photos: Array<PhotoFromServer>;
}) => {
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-yellow" />
      <Gallery dict={dict} photos={photos} />
    </HomeSectionWrapper>
  );
};

export default HomeGallerySec;
