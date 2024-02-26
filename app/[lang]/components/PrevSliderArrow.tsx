import React from "react";
import PrevArrowSVG from "./svgs/PrevArrowSVG";

export type PrevSliderArrowProps = {
  prevFunc: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  arrowColor: string;
  prevAriaRoledescription: string;
};

const PrevSliderArrow = ({
  prevFunc,
  arrowColor,
  prevAriaRoledescription,
}: PrevSliderArrowProps) => {
  return (
    <button
      aria-describedby={`${prevAriaRoledescription} button`}
      className="z-40 h-fit"
      onClick={prevFunc}
    >
      <label
        className="sr-only"
        htmlFor={`${prevAriaRoledescription} button`}
      >{`${prevAriaRoledescription} button`}</label>
      <PrevArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default PrevSliderArrow;
