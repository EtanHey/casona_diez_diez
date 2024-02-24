import { Review } from "@/app/[lang]/types";
import { utapi } from "uploadthing/server";

export const getPhotos = async (): Promise<any> => {
  'use server';
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
export const getReviews = async (): Promise<Array<Review>> => {
  'use server';
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

