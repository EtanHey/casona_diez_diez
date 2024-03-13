"use client";
import { PhotoFromServer } from "@/app/types";
import React from "react";

const AdminPhotoNameInput = ({ photo }: { photo: PhotoFromServer }) => {
  const handleRenamingPhoto = async ({
    fileKey,
    newName,
  }: {
    fileKey: string;
    newName: string;
  }) => {
    const res = await fetch("/api/admin/dashboard/images", {
      method: "PUT",
      body: JSON.stringify({ fileKey, newName }),
    });
    console.log("res.json()", await res.json());
  };
  return (
    <input
      type="text"
      defaultValue={photo.key.split("_").splice(1).join("_").split(".")[0]}
      onChange={(e) => {
        handleRenamingPhoto({
          fileKey: photo.key,
          newName: e.target.value,
        });
      }}
    />
  );
};

export default AdminPhotoNameInput;
