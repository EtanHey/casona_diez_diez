import React from "react";
import NextArrowSVG from "./svgs/NextArrowSVG";

export type NextSliderArrowProps = {
  nextFunc: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  arrowColor: string;
  nextAriaRoledescription: string;
};

const NextSliderArrow = ({
  nextFunc,
  arrowColor,
  nextAriaRoledescription,
}: NextSliderArrowProps) => {
  return (
    <button
      aria-describedby={`${nextAriaRoledescription} button`}
      className="z-40 h-fit"
      onClick={nextFunc}
    >
      <label
        className="sr-only"
        htmlFor={`${nextAriaRoledescription} button`}
      >{`${nextAriaRoledescription} button`}</label>
      <NextArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default NextSliderArrow;
