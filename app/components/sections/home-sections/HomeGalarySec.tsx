"use client";
import React, { useState } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import Header from "../../Header";
import ColoredBreak from "../../ColoredBreak";

import { PhotoFromServer } from "@/app/types";
import Galary from "../../galaryComponents";
import GalaryPrevArrow from "../../galaryComponents/GalaryPrevArrow";
import GalaryNextArrow from "../../galaryComponents/GalaryNextArrow";

const HomeGalarySec = ({
  photos,
}: {
  photos: Array<PhotoFromServer>;
}) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const length = photos.length;
  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1);
  }
  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1);
  }
  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-yellow" />
      <div className="flex w-full flex-col gap-4">
        <div className="flex justify-between px-4">
          <GalaryPrevArrow prevPhoto={prevPhoto} />
          <Header>Galeria</Header>
          <GalaryNextArrow nextPhoto={nextPhoto} />
        </div>
        <Galary photos={photos} />
      </div>
    </HomeSectionWrapper>
  );
};

export default HomeGalarySec;
