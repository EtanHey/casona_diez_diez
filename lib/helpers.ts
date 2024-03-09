import { Review } from "@/app/[lang]/types";
import { UTApi } from "uploadthing/server";
import { getUserByLoginInfo } from "./prisma";
const secret = process.env.UPLOADTHING_SECRET;
import jwt from "jwt-simple";
import { cookies } from "next/headers";

export const getPhotos = async (): Promise<any> => {
  "use server";
  const utapi = new UTApi();
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
  "use server";
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

export const login = async (formData: FormData) => {
  "use server";
  try {
    const { username, password } = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };
    if (!username || !password) {
      throw new Error("Please enter username and password");
    }
    const result = await getUserByLoginInfo({
      username: username.toLowerCase(),
      password,
    });
    if (result && result.data && secret) {
      const admin = jwt.encode(result.data.username, secret);
      if (admin) {
        // set timed cookies
        let date = new Date();
        date.setTime(date.getTime() + 5 * 60 * 1000);
        cookies().set("admin", admin, { expires: date });
      } else {
        throw new Error("Invalid username or password");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
