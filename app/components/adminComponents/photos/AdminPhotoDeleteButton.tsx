"use client";
import { PhotoFromServer } from "@/app/types";
import React from "react";
import { handleDeletePhoto } from "./AdminPhotosLibrary";

const AdminPhotoDeleteButton = ({
  photo,
  setDeleted,
}: {
  photo: PhotoFromServer;
  setDeleted: (deleted: boolean) => void;
}) => {
  return (
    <button
      className="absolute right-0 top-0 z-50 h-2 w-2 cursor-pointer rounded-full"
      onClick={() => {
        handleDeletePhoto(photo.key).then(() => setDeleted(true));
      }}
    >
      &times;
    </button>
  );
};

export default AdminPhotoDeleteButton;
