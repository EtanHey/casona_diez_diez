import React from "react";
import NextArrowSVG from "./svgs/NextArrowSVG";

export type NextSliderArrowProps = {
  nextFunc: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  arrowColor: string;
};

const NextSliderArrow = ({ nextFunc, arrowColor }: NextSliderArrowProps) => {
  return (
    <button className="z-40 h-fit" onClick={nextFunc}>
      <NextArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default NextSliderArrow;
