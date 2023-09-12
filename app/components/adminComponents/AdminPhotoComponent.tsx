"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PhotoFromServer } from "@/app/types";

const AdminPhotoComponent = ({ photo }: { photo: PhotoFromServer }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(photo.key.split("_")[1].split(".")[0]);
  }, [photo]);
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
      <input
        type="text"
        defaultValue={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default AdminPhotoComponent;
