import { utapi } from "uploadthing/server";
import HomeGallerySec from "./components/sections/home-sections/HomeGallerySec";
import HomeReviewSec from "./components/sections/home-sections/HomeReviewSec";
import HomeServicesSec from "./components/sections/home-sections/HomeServicesSec";
import HomeWelcomeSec from "./components/sections/home-sections/HomeWelcomeSec";
import { Review } from "./types";
import { getDictionary } from "./dictionary";

export const getPhotos = async (): Promise<any> => {
  try {
    const listPhotos = await utapi.listFiles();
    const imageList = await utapi.getFileUrls(
      listPhotos.map((photo) => photo.key),
    );
    return imageList;
  } catch (error) {
    console.log(error, "getPhotos error");
    return [];
  }
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const photos = await getPhotos();
  const getReviews = async (): Promise<Array<Review>> => {
    try {
      const placeId = process.env.PLACE_ID;
      const GoogleKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
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
  const photos = await getPhotos();

  return (
    <>
      <HomeWelcomeSec locale={lang} />
      <HomeServicesSec />
      {photos && photos.length > 0 && <HomeGallerySec photos={photos} />}
      {reviews && reviews.length > 0 && <HomeReviewSec reviews={reviews} />}
    </>
  );
}
