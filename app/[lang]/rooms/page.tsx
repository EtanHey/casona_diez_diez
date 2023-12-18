import React from "react";

import { getPhotos } from "../page";
import ColoredBreak from "@/app/[lang]/components/ColoredBreak";
import Header from "@/app/[lang]/components/Header";
import Gallery from "@/app/[lang]/components/gallery";
import AC from "@/app/[lang]/components/rooms/AC";
import Balcony from "@/app/[lang]/components/rooms/Balcony";
import Clean from "@/app/[lang]/components/rooms/Clean";
import PrivateBathrooms from "@/app/[lang]/components/rooms/PrivateBathrooms";
import { getDictionary } from "../dictionaries";

const Rooms = async ({ params: { lang } }: { params: { lang: string } }) => {
  const photos = await getPhotos();
  const dict = await getDictionary(lang);
  const roomsDictionary = dict.rooms;
  return (
    <>
      <Header>{roomsDictionary.rooms}</Header>
      <div className="flex h-full w-full flex-col text-center">
        <ColoredBreak bg="bg-cdd-red" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light uppercase">
            {roomsDictionary.rooms} {roomsDictionary.of} 1, 2{" "}
            {roomsDictionary.or} 3 {roomsDictionary.beds}
          </h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms
              text={roomsDictionary.privateBathrooms}
              fill="#FC1E32"
            />
            <Balcony text={roomsDictionary.balcony} fill="#FC1E32" />
            <AC text={roomsDictionary.airConditioner} fill="#FC1E32" />
            <Clean text={roomsDictionary.cleaningService} fill="#FC1E32" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-green" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light uppercase">
            {roomsDictionary.rooms} {roomsDictionary.of} 1, 2, 3, 4{" "}
            {roomsDictionary.or} 5 {roomsDictionary.beds}{" "}
          </h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms
              text={roomsDictionary.privateBathrooms}
              fill="#04986F"
            />
            <Balcony text={roomsDictionary.balcony} fill="#04986F" />
            <AC text={roomsDictionary.airConditioner} fill="#04986F" />
            <Clean text={roomsDictionary.cleaningService} fill="#04986F" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-yellow" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light uppercase">
            {roomsDictionary.rooms} {roomsDictionary.of} 1 {roomsDictionary.or}{" "}
            2 {roomsDictionary.beds}{" "}
          </h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms
              text={roomsDictionary.privateBathrooms}
              fill="#F7A600"
            />
            <AC text={roomsDictionary.airConditioner} fill="#F7A600" />
            <Clean text={roomsDictionary.cleaningService} fill="#F7A600" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-red" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light uppercase">
            {roomsDictionary.rooms} {roomsDictionary.of} 1, 2{" "}
            {roomsDictionary.or} 3 {roomsDictionary.beds}
          </h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms
              text={roomsDictionary.privateBathrooms}
              fill="#FC1E32"
            />
            <AC text={roomsDictionary.airConditioner} fill="#FC1E32" />
            <Clean text={roomsDictionary.cleaningService} fill="#FC1E32" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-red" />
      </div>

      <Gallery
        dict={{
          mainText: dict.home.gallerySection.mainText,
          previousButtonText: dict.common.previousButtonText,
          nextButtonText: dict.common.nextButtonText,
        }}
        photos={photos}
      />
    </>
  );
};

export default Rooms;
