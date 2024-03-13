"use client";
import React from "react";
import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone } from "@/app/[lang]/utils";
const AdminPhotoUploader = () => {
  return (
    <>
      <UploadButton
        content={{
          button: "Elija el archivo",
          allowedContent: "imagenes (8MB)",
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <UploadDropzone
        content={{
          label: "elegir archivos o arrastrar y soltar",
          allowedContent: "imagenes (8MB)",
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  );
};

export default AdminPhotoUploader;
