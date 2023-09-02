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
}: ModalProps) => {
  return (
    <div
      onClick={changeZoom}
      className="fixed inset-0 z-50 flex justify-between place-items-center bg-black/40"
    >
      <PrevSliderArrow
        arrowColor={arrowColor}
        prevFunc={prevFunc}
      />
      <span className="absolute left-1/2 top-1/2 h-30/40 w-39/40 -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
      <NextSliderArrow arrowColor={arrowColor} nextFunc={nextFunc} />
    </div>
  );
};

export default Modal;
