import React from "react";
import PrevArrowSVG from "./svgs/PrevArrowSVG";

type PrevSliderArrowProps = {
  prevFunc: () => void;
  arrowColor: string;
}

const PrevSliderArrow = ({
  prevFunc,
  arrowColor,
}:PrevSliderArrowProps) => {
  return (
    <button onClick={prevFunc}>
      <PrevArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default PrevSliderArrow;
