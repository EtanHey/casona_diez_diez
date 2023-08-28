import { utapi } from "uploadthing/server";
import HomeGalarySec from "./components/sections/home-sections/HomeGalarySec";
import MediaFooter from "./components/sections/MediaFooter";
import HomeReviewSec from "./components/sections/home-sections/HomeReviewSec";
import HomeServicesSec from "./components/sections/home-sections/HomeServicesSec";
import HomeWelcomeSec from "./components/sections/home-sections/HomeWelcomeSec";
import { PhotoFromServer, Review } from "./types";

export const getPhotos = async (): Promise<Array<PhotoFromServer>> => {
  try {
    const listPhotos = await utapi.listFiles();
    return await utapi.getFileUrls(listPhotos.map((photo) => photo.key));
  } catch (error) {
    console.log(error, "getPhotos error");
    return [];
  }
};

export default async function Home() {
  
  const photos = await getPhotos();
  const getReviews = async (): Promise<Array<Review>> => {
    try {
      const placeId = process.env.PLACE_ID;
      const GoogleKey = process.env.GOOGLE_API_KEY;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GoogleKey}`,
      );
      const { result } = await response.json();
      return result.reviews;
    } catch (error) {
      console.log(error, "getReviews error");
      return [];
    }
  };
  const reviews = await getReviews();

  return (
    <>
      <HomeWelcomeSec />
      <HomeServicesSec />
      {photos && photos.length > 0 && <HomeGalarySec photos={photos} />}
      {reviews && reviews.length > 0 && <HomeReviewSec reviews={reviews} />}
      <MediaFooter />
    </>
  );
}
