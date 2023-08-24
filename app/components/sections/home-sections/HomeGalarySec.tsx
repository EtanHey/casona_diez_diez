import React from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import Header from "../../Header";
import ColoredBreak from "../../ColoredBreak";
import Galary from "../../Galary";
import { utapi } from "uploadthing/server";
import { PhotoFromServer } from "@/app/types";

const HomeGalarySec = async () => {
  const getPhotos = async (): Promise<Array<PhotoFromServer>> => {
    const listPhotos = await utapi.listFiles();
    return await utapi.getFileUrls(listPhotos.map((photo) => photo.key));
  };
  const photos = await getPhotos();

  return (
    <HomeSectionWrapper>
      <ColoredBreak bg="bg-cdd-yellow" />
      <Header>Galeria</Header>
      <Galary photos={photos} />
    </HomeSectionWrapper>
  );
};

export default HomeGalarySec;
