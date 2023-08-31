import Header from "@/app/components/Header";
import React from "react";
import HeartSVG from "../components/svgs/HeartSVG";

const Location = () => {
  return (
    <>
      <Header>UBICACIÓN</Header>

      <div className="flex w-full flex-col place-content-center items-center gap-8">
        <div className="flex w-full place-content-center items-center gap-2">
          <HeartSVG />
          <p className="text-sm font-medium uppercase">en el santelmo</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-base">Piedras 1010 e/ Carlos Calvo</p>
        </div>
      </div>
    </>
  );
};

export default Location;
