"use client";
import React from "react";
import PrevArrowSVG from "../svgs/PrevArrowSVG";

const GalaryPrevArrow = ({prevPhoto}:{prevPhoto:() => void}) => {
  return (
    <button onClick={prevPhoto}>
      <PrevArrowSVG />
    </button>
  );
};

export default GalaryPrevArrow;
