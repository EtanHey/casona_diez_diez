import { getPhotos } from "@/app/page";
import { PhotoFromServer } from "@/app/types";
import React from "react";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { photos?: PhotoFromServer[] };
}) => {
  const photos = await getPhotos();
  photos ? (params.photos = photos) : null;
  return <>{children}</>;
};

export default layout;
