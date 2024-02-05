import React, { ReactNode } from "react";
import PrevSliderArrow, { PrevSliderArrowProps } from "./PrevSliderArrow";
import NextSliderArrow, { NextSliderArrowProps } from "./NextSliderArrow";

type ModalProps = {
  children: ReactNode;
  changeZoom: () => void;
} & NextSliderArrowProps &
  PrevSliderArrowProps;

const Modal = ({
  children,
  changeZoom,
  arrowColor,
  prevFunc,
  nextFunc,
  prevAriaRoledescription,
  nextAriaRoledescription,
}: ModalProps) => {
  return (
    <div
      onClick={changeZoom}
      className="fixed inset-0 z-50 flex place-items-center justify-between bg-black/40"
    >
      <PrevSliderArrow
        prevAriaRoledescription={prevAriaRoledescription}
        arrowColor={arrowColor}
        prevFunc={prevFunc}
      />
      <span className="absolute left-1/2 top-1/2 h-30/40 w-39/40 -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
      <NextSliderArrow
        nextAriaRoledescription={nextAriaRoledescription}
        arrowColor={arrowColor}
        nextFunc={nextFunc}
      />
    </div>
  );
};

export default Modal;
