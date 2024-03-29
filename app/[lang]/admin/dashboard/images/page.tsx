// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fineimport AdminPhotosLibrary from "@/app/[lang]/components/adminComponents/AdminPhotosLibrary";

import AdminPhotosLibrary from "@/app/[lang]/components/adminComponents/photos/AdminPhotosLibrary";
import AdminPhotoUploader from "@/app/[lang]/components/adminComponents/photos/AdminPhotoUploader";
import BackButton from "@/app/[lang]/components/BackButton";

export default function page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-24">
      {/* galary */}
      <BackButton />
      <AdminPhotosLibrary />
      <AdminPhotoUploader />
    </main>
  );
}
