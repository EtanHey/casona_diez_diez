import { getPhotos } from "@/app/page";
import React from "react";
import AdminPhotoComponent from "./AdminPhotoComponent";

const AdminPhotosLibrary = async () => {
  const photos = await getPhotos();
  

  return (
    <div className="flex h-screen w-full flex-wrap justify-center gap-2 overflow-y-scroll">
      {photos.map((photo) => (
        <AdminPhotoComponent
          key={photo.key}
          photo={photo}
        />
      ))}
    </div>
  );
};

export default AdminPhotosLibrary;
