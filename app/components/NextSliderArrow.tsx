import React from "react";
import NextArrowSVG from "./svgs/NextArrowSVG";

const NextSliderArrow = ({
  nextFunc,
  arrowColor,
}: {
  nextFunc: () => void;
  arrowColor: string;
}) => {
  return (
    <button onClick={nextFunc}>
      <NextArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default NextSliderArrow;
