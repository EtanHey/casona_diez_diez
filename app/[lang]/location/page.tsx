import ColoredBreak from "@/app/[lang]/components/ColoredBreak";
import Header from "@/app/[lang]/components/Header";
import MapComponent from "@/app/[lang]/components/MapComponent";
import HeartSVG from "@/app/[lang]/components/svgs/HeartSVG";
import React from "react";
import { getDictionary } from "../dictionaries";

const Location = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);

  const locationDictionary = dict.location;
  return (
    <>
      <Header>{locationDictionary.mainText}</Header>
      <div className="mb-4 flex w-full flex-col place-content-center items-center">
        <div className="mb-8 flex w-full place-content-center items-center gap-2">
          <HeartSVG />
          <p className="text-sm font-medium uppercase">
            {locationDictionary.subText}
          </p>
        </div>
        <div className="flex w-33.5/40 flex-col text-center">
          <p className="text-base font-semibold">
            Piedras 1010 {locationDictionary.onStreet} Carlos Calvo
          </p>
        </div>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="flex w-33.5/40 flex-col text-center text-sm">
          {locationDictionary.threeBlocksFrom}
          {locationDictionary.sundayFair}
        </p>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="flex w-33.5/40 flex-col px-6 text-center text-sm">
          {locationDictionary.twoBlocksFrom}
          {locationDictionary.lineC}
        </p>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="flex w-33.5/40 flex-col px-6 text-center text-sm">
          {locationDictionary.threeBlocksFrom}
          {locationDictionary.nineOfJulyAvenue}
        </p>
        <ColoredBreak bg="bg-cdd-red" />
        <div className="grid w-full grid-rows-3 gap-3 px-14 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 sm:px-8 md:gap-10 md:px-14">
          <div className="flex flex-col gap-1">
            <h5 className="max-w-[60px] whitespace-nowrap text-xs text-cdd-red sm:text-base">
              {locationDictionary.fromAirport.mainText} {locationDictionary.fromAirport.distance}
            </h5>
            <ul className="list-square h-full flex flex-col text-xs justify-around">
              {" "}
              <li>
                {" "}
                {locationDictionary.fromAirport.firstTransportationOption}
              </li>
              <li>
                {locationDictionary.fromAirport.secondTransportationOption}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="max-w-[60px] whitespace-nowrap text-xs text-cdd-red sm:text-base">
              {locationDictionary.fromRetiro.mainText} {locationDictionary.fromRetiro.distance}
            </h5>
            <ul className="list-square h-full flex flex-col text-xs justify-around">
              {" "}
              <li>
                {" "}
                {locationDictionary.fromRetiro.firstTransportationOption}
              </li>
              <li>
                {locationDictionary.fromRetiro.secondTransportationOption}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="max-w-[60px] whitespace-nowrap  text-xs text-cdd-red sm:text-base">
              {locationDictionary.fromAiropark.mainText} {locationDictionary.fromAiropark.distance}
            </h5>
            <ul className="list-square h-full flex flex-col text-xs justify-around">
              {" "}
              <li>
                {" "}
                {locationDictionary.fromAiropark.firstTransportationOption}
              </li>
              <li>
                {locationDictionary.fromAiropark.secondTransportationOption}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MapComponent />
      <p className="mt-8 px-4 text-center text-sm font-light">
        {locationDictionary.mapSubText}
      </p>
    </>
  );
};

export default Location;
