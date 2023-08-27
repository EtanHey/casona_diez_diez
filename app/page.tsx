import { utapi } from "uploadthing/server";
import HomeGalarySec from "./components/sections/home-sections/HomeGalarySec";
import HomeMediaSec from "./components/sections/home-sections/HomeMediaSec";
import HomeReviewSec from "./components/sections/home-sections/HomeReviewSec";
import HomeServicesSec from "./components/sections/home-sections/HomeServicesSec";
import HomeWelcomeSec from "./components/sections/home-sections/HomeWelcomeSec";
import { PhotoFromServer, Review } from "./types";

export default async function Home() {
  const getPhotos = async (): Promise<Array<PhotoFromServer>> => {
    const listPhotos = await utapi.listFiles();
    return await utapi.getFileUrls(listPhotos.map((photo) => photo.key));
  };
  const photos = await getPhotos();

  const placeId = process.env.PLACE_ID;
  const GoogleKey = process.env.GOOGLE_API_KEY;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GoogleKey}`,
  );
  const { result } = await response.json();
  const reviews: Array<Review> = result.reviews;

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HomeWelcomeSec />
      <HomeServicesSec />
      {photos && <HomeGalarySec photos={photos} />}
      {reviews && <HomeReviewSec reviews={reviews} />}
      <HomeMediaSec />
    </main>
  );
}
