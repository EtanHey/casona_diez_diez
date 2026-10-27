import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "@uploadthing/shared";
import { getAdminSession } from "@/lib/admin-auth";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 20 } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const username = await getAdminSession();
      if (!username) throw new UploadThingError({ code: "UNAUTHORIZED" });
      return { userId: username };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
