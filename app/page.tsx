import { utapi } from "uploadthing/server";
import HomeGalarySec from "./components/sections/home-sections/HomeGalarySec";
import HomeMediaSec from "./components/sections/home-sections/HomeMediaSec";
import HomeReviewSec from "./components/sections/home-sections/HomeReviewSec";
import HomeServicesSec from "./components/sections/home-sections/HomeServicesSec";
import HomeWelcomeSec from "./components/sections/home-sections/HomeWelcomeSec";
import { PhotoFromServer } from "./types";

export default async function Home() {
  const getPhotos = async (): Promise<Array<PhotoFromServer>> => {
    const listPhotos = await utapi.listFiles();
    return await utapi.getFileUrls(listPhotos.map((photo) => photo.key));
  };
  const photos = await getPhotos();
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HomeWelcomeSec />
      <HomeServicesSec />
      <HomeGalarySec photos={photos} />
      <HomeReviewSec />
      <HomeMediaSec />
    </main>
  );
}
