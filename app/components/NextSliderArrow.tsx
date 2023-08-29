import React from "react";
import NextArrowSVG from "./svgs/NextArrowSVG";

type NextSliderArrowProps = {
  nextFunc: () => void;
  arrowColor: string;
}

const NextSliderArrow = ({
  nextFunc,
  arrowColor,
}:NextSliderArrowProps) => {
  return (
    <button onClick={nextFunc}>
      <NextArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default NextSliderArrow;
