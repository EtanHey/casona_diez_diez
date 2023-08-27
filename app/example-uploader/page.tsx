"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone, Uploader } from "../utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 p-24">
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