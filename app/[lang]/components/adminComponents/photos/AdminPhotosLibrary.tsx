import React from "react";
import AdminPhotoComponent from "./AdminPhotoComponent";
import { PhotoFromServer } from "@/app/types";
import { getPhotos } from "@/lib/actions";

export async function handleDeletePhoto(fileKey: string) {
  const res = await fetch("/api/admin/dashboard/images", {
    method: "DELETE",
    body: JSON.stringify({ fileKey }),
  });
  console.log("res.json()", await res.json());
}
const AdminPhotosLibrary = async () => {
  const photos = await getPhotos();
  return (
    <div className="scrollbar-none flex h-screen w-full flex-wrap justify-center gap-2 overflow-y-scroll">
      {photos.map((photo: PhotoFromServer) => (
        <AdminPhotoComponent key={photo.key} photo={photo} />
      ))}
    </div>
  );
};

export default AdminPhotosLibrary;
