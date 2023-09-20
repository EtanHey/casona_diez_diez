import React from "react";
import HeroImage from "./HeroImage";
import { getPhotos } from "../page";
import { getOffer } from "@/lib/prisma";
import MediaFooter from "./sections/MediaFooter";

const PublicPageWrapper = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const photos = await getPhotos();
  const offer = await getOffer();
  return (
    <>
      <HeroImage offer={offer} photos={photos} />
      <div className="mb-8 mt-16 w-full px-0">{children}</div>
      <MediaFooter />
    </>
  );
};

export default PublicPageWrapper;
