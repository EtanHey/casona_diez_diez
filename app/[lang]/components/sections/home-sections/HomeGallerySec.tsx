"use client";
import React from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import ColoredBreak from "../../ColoredBreak";
import { PhotoFromServer } from "@/app/[lang]/types";
import Gallery from "../../gallery";

const HomeGallerySec = ({ photos }: { photos: Array<PhotoFromServer> }) => {
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-yellow" />
      <Gallery photos={photos} />
    </HomeSectionWrapper>
  );
};

export default HomeGallerySec;
