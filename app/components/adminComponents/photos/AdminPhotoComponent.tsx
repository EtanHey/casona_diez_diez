"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PhotoFromServer } from "@/app/types";
import AdminPhotoNameInput from "./AdminPhotoNameInput";
import AdminPhotoDeleteButton from "./AdminPhotoDeleteButton";

const AdminPhotoComponent = ({ photo }: { photo: PhotoFromServer }) => {
  const [deleted, setDeleted] = useState(false);

  return deleted ? null : (
    <div className="flex flex-col place-items-center gap-1">
      <div
        key={photo.key}
        className="relative box-content h-36 w-36 rounded-xl border border-black"
      >
        <AdminPhotoDeleteButton setDeleted={setDeleted} photo={photo} />
        <Image
          alt={"photo"}
          fill
          sizes="100%"
          style={{ objectFit: "contain" }}
          src={photo.url}
        />
      </div>
      <AdminPhotoNameInput photo={photo} />
    </div>
  );
};

export default AdminPhotoComponent;
