"use client";
import { PhotoFromServer } from "@/app/types";
import Image from "next/image";
import React, { useState } from "react";
import Header from "../Header";
import Modal from "../Modal";
import NextSliderArrow from "../NextSliderArrow";
import PrevSliderArrow from "../PrevSliderArrow";
import Times from "../svgs/Times";
import GalarySlider from "./GalarySlider";

const Galary = ({ photos }: { photos: Array<PhotoFromServer> }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const length = photos.length;
  if (!photos || photos.length === 0) return null;
  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1);
  };
  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1);
  };
  const [zoom, setZoom] = useState(false);
  const changeZoom = () => {
    setZoom(!zoom);
  };
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex justify-between px-4">
          <PrevSliderArrow prevFunc={prevPhoto} arrowColor="#F7A600" />
          <Header>Galeria</Header>
          <NextSliderArrow nextFunc={nextPhoto} arrowColor="#F7A600" />
        </div>
        <div className="relative mb-8 flex h-64 w-full place-items-center justify-center sm:h-72 md:h-96 lg:h-[500px]">
          <GalarySlider
            photos={photos}
            currentPhoto={currentPhoto}
            changeZoom={changeZoom}
          />
        </div>
      </div>
      {/* Counter */}
      {/* <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-cdd-black text-cdd-yellow">
        {currentPhoto + 1}/{photos.length}
    </span> */}
      {zoom && (
        <Modal changeZoom={changeZoom}>
          <button
            className="absolute right-4 top-4 z-50 bg-black/30 p-1"
            onClick={changeZoom}
          >
            <Times />
          </button>
          <Image
            alt={photos[currentPhoto].key}
            src={photos[currentPhoto].url}
            onClick={(ev) => {
              ev.stopPropagation();
            }}
            fill
            objectFit="contain"
          />
        </Modal>
      )}
    </>
  );
};

export default Galary;