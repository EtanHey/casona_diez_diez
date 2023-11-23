import React from "react";
import PrevArrowSVG from "./svgs/PrevArrowSVG";

export type PrevSliderArrowProps = {
  prevFunc: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  arrowColor: string;
}

const PrevSliderArrow = ({
  prevFunc,
  arrowColor,
}:PrevSliderArrowProps) => {
  return (
    <button className="z-40 h-fit" onClick={prevFunc}>
      <PrevArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default PrevSliderArrow;
