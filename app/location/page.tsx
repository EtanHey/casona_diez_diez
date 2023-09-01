import Header from "@/app/components/Header";
import React from "react";
import HeartSVG from "../components/svgs/HeartSVG";
import ColoredBreak from "../components/ColoredBreak";
import MapComponent from "../components/MapComponent";

const Location = () => {
  return (
    <>
      <Header>UBICACIÓN</Header>

      <div className="mb-4 flex w-full flex-col place-content-center items-center">
        <div className="mb-8 flex w-full place-content-center items-center gap-2">
          <HeartSVG />
          <p className="text-sm font-medium uppercase">en el santelmo</p>
        </div>
        <div className="w-33.5/40 flex flex-col text-center">
          <p className="text-base font-semibold">
            Piedras 1010 e/ Carlos Calvo
          </p>
        </div>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="w-33.5/40 flex flex-col text-center text-sm">
          A tres cuadras de la feria de los domingos
        </p>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="w-33.5/40 flex flex-col px-6 text-center text-sm">
          A dos cuadras de la estación de subte de la linea C
        </p>
        <ColoredBreak small bg="bg-cdd-red" />
        <p className="w-33.5/40 flex flex-col px-6 text-center text-sm">
          A tres cuadras de la avenida 9 de julio
        </p>
        <ColoredBreak bg="bg-cdd-red" />
        <div className="flex gap-3 px-4">
          <div className="flex flex-col gap-1">
            <h5 className="max-w-[60px] text-xs text-cdd-red">
              DESDE EL AEROPUERTO
            </h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="max-w-[60px] text-xs text-cdd-red">DESDE RETIRO</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="max-w-[60px] text-xs text-cdd-red">
              DESDE AEROPARQUE
            </h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
          </div>
        </div>
      </div>
      <MapComponent />
      <p className="px-4 text-center text-sm font-light mt-8">
        TE INVITAMOS A CONOCER EL BARRIO MÁS CULTURAL DE BUENOS AIRES
      </p>
    </>
  );
};

export default Location;
