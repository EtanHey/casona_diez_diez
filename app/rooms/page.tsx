import React from "react";
import Gallery from "../components/gallery";
import { getPhotos } from "../page";
import Header from "../components/Header";
import ColoredBreak from "../components/ColoredBreak";
import PrivateBathrooms from "../components/rooms/PrivateBathrooms";
import Balcony from "../components/rooms/Balcony";
import AC from "../components/rooms/AC";
import Clean from "../components/rooms/Clean";
import PublicPageWrapper from "../components/PublicPageWrapper";

const Rooms = async () => {
  const photos = await getPhotos();
  return (
    <PublicPageWrapper>
      <Header>Habitaciones</Header>
      <div className="flex h-full w-full flex-col text-center">
        <ColoredBreak bg="bg-cdd-red" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light">HABITACIONES DE 1, 2 o 3 CAMAS</h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms fill="#FC1E32" />
            <Balcony fill="#FC1E32" />
            <AC fill="#FC1E32" />
            <Clean fill="#FC1E32" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-green" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light">
            HABITACIONES DE 1, 2, 3, 4 o 5 CAMAS{" "}
          </h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms fill="#04986F" />
            <Balcony fill="#04986F" />
            <AC fill="#04986F" />
            <Clean fill="#04986F" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-yellow" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light">HABITACIONES DE 1 o 2 CAMAS </h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms fill="#F7A600" />
            <AC fill="#F7A600" />
            <Clean fill="#F7A600" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-red" />
        <div className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-light">HABITACIONES DE 1, 2 o 3 CAMAS</h2>
          <div className="flex flex-row place-content-around items-end">
            <PrivateBathrooms fill="#FC1E32" />
            <AC fill="#FC1E32" />
            <Clean fill="#FC1E32" />
          </div>
        </div>
        <ColoredBreak bg="bg-cdd-red" />
      </div>

      <Gallery photos={photos} />
    </PublicPageWrapper>
  );
};

export default Rooms;
