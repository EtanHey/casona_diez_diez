"use client";
import React from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import ColoredBreak from "../../ColoredBreak";
import { PhotoFromServer } from "@/app/types";
import Galary from "../../galary";

const HomeGalarySec = ({ photos }: { photos: Array<PhotoFromServer> }) => {
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-yellow" />
      <Galary photos={photos} />
    </HomeSectionWrapper>
  );
};

export default HomeGalarySec;
