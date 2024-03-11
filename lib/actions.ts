"use server";

import { Review } from "@/app/[lang]/types";
import { UTApi } from "uploadthing/server";
import { getUserByLoginInfo, updateOffer } from "./prisma";
const secret = process.env.JWT_SECRET;
import jwt from "jwt-simple";
import { cookies } from "next/headers";

import { Offer } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const login = async (formData: FormData) => {
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

export async function getReviews(): Promise<Array<Review>> {
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
}

export const getPhotos = async (): Promise<any> => {
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

export const handleUpdateOffer = async (
  formData: FormData,

  offer: Offer,
) => {
  const { newOffer, lang } = {
    newOffer: formData.get("newOffer") as string,
    lang: formData.get("lang") as string,
  };
  const offerToUpdate = {
    text: newOffer,
    id: offer.id,
    lang,
  };
  const { updatedOffer, error } = await updateOffer(offerToUpdate);
  if (error) {
    console.log(error);
    throw new Error("Failed updating offer");
  }
  if (updatedOffer) {
    revalidatePath(`/admin/dashboard/offers`);
  }
};
