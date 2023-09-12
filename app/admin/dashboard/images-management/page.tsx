"use client";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone } from "../../../utils";
import { PhotoFromServer } from "@/app/types";
import AdminPhotoComponent from "@/app/components/adminComponents/AdminPhotoComponent";

export default function page({
  params,
}: {
  params: { photos?: PhotoFromServer[] };
}) {
  const photos = params.photos ?? [];
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-24">
      {/* galary */}
      {photos && (
        <div className="flex h-screen w-full flex-wrap justify-center gap-2 overflow-y-scroll">
          {photos.map((photo) => (
            <AdminPhotoComponent key={photo.key} photo={photo} />
          ))}
        </div>
      )}

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
    </main>
  );
}
