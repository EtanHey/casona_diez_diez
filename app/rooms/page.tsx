import React from "react";
import MediaFooter from "../components/sections/MediaFooter";
import HeroImage from "../components/HeroImage";
import Galary from "../components/galary";
import { getPhotos } from "../page";
import Header from "../components/Header";

const Rooms = async () => {
  const photos = await getPhotos();
  return (
    <>
      <HeroImage />
      <div className="m-10">
        <Header>Habitaciones</Header>
      </div>
      <Galary photos={photos} />
      <MediaFooter />
    </>
  );
};

export default Rooms;
