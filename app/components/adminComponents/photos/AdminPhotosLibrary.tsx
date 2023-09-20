// import { getPhotos } from "@/app/page";
import React from "react";
import AdminPhotoComponent from "./AdminPhotoComponent";

export async function handleDeletePhoto(fileKey: string) {
  const res = await fetch("/api/admin/dashboard/images", {
    method: "DELETE",
    body: JSON.stringify({ fileKey }),
  });
  console.log("res.json()", await res.json());
}
const AdminPhotosLibrary = async () => {
  // const photos = await getPhotos();
  return (
    <div className="flex h-screen w-full flex-wrap justify-center gap-2 overflow-y-scroll">
      {/* {photos.map((photo) => (
        <AdminPhotoComponent key={photo.key} photo={photo} />
      ))} */}
    </div>
  );
};

export default AdminPhotosLibrary;
