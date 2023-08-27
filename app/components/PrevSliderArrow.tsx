import React from "react";
import PrevArrowSVG from "./svgs/PrevArrowSVG";

const PrevSliderArrow = ({
  prevFunc,
  arrowColor,
}: {
  prevFunc: () => void;
  arrowColor: string;
}) => {
  return (
    <button onClick={prevFunc}>
      <PrevArrowSVG arrowColor={arrowColor} />
    </button>
  );
};

export default PrevSliderArrow;
