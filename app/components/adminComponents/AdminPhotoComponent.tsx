import React from "react";
import Image from "next/image";
import { PhotoFromServer } from "@/app/types";
import AdminPhotoNameInput from "./AdminPhotoNameInput";

const AdminPhotoComponent = ({ photo }: { photo: PhotoFromServer }) => {
  return (
    <div className="flex flex-col place-items-center gap-1">
      <div
        key={photo.key}
        className="relative box-content h-36 w-36 rounded-xl border border-black"
      >
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
