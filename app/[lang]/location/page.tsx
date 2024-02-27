import ColoredBreak from "@/app/[lang]/components/ColoredBreak";
import Header from "@/app/[lang]/components/Header";
import MapComponent from "@/app/[lang]/components/MapComponent";
import HeartSVG from "@/app/[lang]/components/svgs/HeartSVG";
import React from "react";
import { getDictionary } from "../dictionaries";
import DirectionsSection from "../components/DirectionsSection";

const Location = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);

  const locationDictionary = dict.location;
  return (
    <>
      <Header>{locationDictionary.mainText}</Header>
      <div className="mb-4 flex w-full flex-col place-content-center items-center">
        <div className="mb-8 flex w-full place-content-center items-center gap-2">
          <HeartSVG />
          <p className="text-sm font-medium uppercase sm:text-lg lg:text-xl xl:text-2xl">
            {locationDictionary.subText}
          </p>
        </div>
        <div className="flex w-33.5/40 flex-col text-center">
          <p className="text-base font-semibold sm:text-lg lg:text-xl xl:text-2xl">
            Piedras 1010 {locationDictionary.onStreet} Carlos Calvo
          </p>
        </div>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="sm:text-md flex w-33.5/40 flex-col  text-center text-sm lg:text-lg xl:text-xl">
          {locationDictionary.threeBlocksFrom}
          {locationDictionary.sundayFair}
        </p>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="flex w-33.5/40 flex-col px-6 text-center text-sm sm:text-base lg:text-lg xl:text-xl">
          {locationDictionary.twoBlocksFrom}
          {locationDictionary.lineC}
        </p>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="flex w-33.5/40 flex-col px-6 text-center text-sm sm:text-base lg:text-lg xl:text-xl">
          {locationDictionary.threeBlocksFrom}
          {locationDictionary.nineOfJulyAvenue}
        </p>
        <ColoredBreak bg="bg-cdd-red" />
        <div className="grid w-full grid-rows-3 gap-3 px-14 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 sm:px-8 md:gap-10 md:px-14">
          <DirectionsSection
            header={
              locationDictionary.fromAirport.mainText +
              " " +
              locationDictionary.fromAirport.distance
            }
            directions={[
              locationDictionary.fromAirport.firstTransportationOption,
              locationDictionary.fromAirport.secondTransportationOption,
            ]}
          />
          <DirectionsSection
            header={
              locationDictionary.fromRetiro.mainText +
              " " +
              locationDictionary.fromRetiro.distance
            }
            directions={[
              locationDictionary.fromRetiro.firstTransportationOption,
              locationDictionary.fromRetiro.secondTransportationOption,
            ]}
          />
          <DirectionsSection
            header={
              locationDictionary.fromAiropark.mainText +
              " " +
              locationDictionary.fromAiropark.distance
            }
            directions={[
              locationDictionary.fromAiropark.firstTransportationOption,
              locationDictionary.fromAiropark.secondTransportationOption,
            ]}
          />
        </div>
      </div>
      <MapComponent />
      <p className="mt-8 px-4 text-center text-sm font-light sm:text-base lg:text-lg xl:text-xl">
        {locationDictionary.mapSubText}
      </p>
    </>
  );
};

export default Location;
