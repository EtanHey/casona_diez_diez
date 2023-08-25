"use client";
import React from "react";
import NextArrowSVG from "../svgs/NextArrowSVG";

const GalaryNextArrow = ({ nextPhoto }: { nextPhoto: () => void }) => {
  return (
    <button onClick={nextPhoto}>
      <NextArrowSVG />
    </button>
  );
};

export default GalaryNextArrow;
