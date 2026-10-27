"use server";

import { MessagesSendStatus, Review } from "@/app/[lang]/types";
import { UTApi } from "uploadthing/server";
import { updateOffer } from "./prisma";
import {
  authenticateAdmin,
  requireAdminAction,
  setAdminCookie,
} from "./admin-auth";
import { Offer } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { default as mailgunFormData } from "form-data";
import Mailgun, { MessagesSendResult } from "mailgun.js";
import { reportServiceError } from "./service-errors";
const mailgun = new Mailgun(mailgunFormData);
const domain = process.env.MAILGUN_DOMAIN;
const mailgunKey = process.env.MAILGUN_API_KEY;

export const login = async (formData: FormData) => {
  try {
    const username = await authenticateAdmin(
      formData.get("username"),
      formData.get("password"),
    );
    if (!username) return false;
    await setAdminCookie(username);
    return true;
  } catch {
    console.error("Admin login unavailable");
    return false;
  }
};

export async function getReviews(): Promise<Array<Review>> {
  try {
    const placeId = process.env.PLACE_ID;
    const GoogleKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GoogleKey}`,
      { next: { revalidate: 3600 } },
    );
    const { result, status } = await response.json();
    if (!response.ok || status !== "OK") {
      throw new Error(
        status === "REQUEST_DENIED" ? "API key denied" : "Reviews unavailable",
      );
    }
    return result?.reviews ?? [];
  } catch (error) {
    reportServiceError("reviews", error);
    return [];
  }
}

export const getPhotos = async (): Promise<any> => {
  try {
    const utapi = new UTApi();
    const listPhotos = await utapi.listFiles();
    const imageList = await utapi.getFileUrls(
      listPhotos.map((photo) => photo.key),
    );
    return imageList;
  } catch (error) {
    reportServiceError("photos", error);
    return [];
  }
};

export const handleUpdateOffer = async (formData: FormData, offer: Offer) => {
  await requireAdminAction();
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

export const handleEmailSend = async (
  currentState: Awaited<MessagesSendResult>,
  formData: FormData,
): Promise<MessagesSendResult> => {
  try {
    const { name, email, title, message } = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      title: formData.get("title") as string,
      message: formData.get("message") as string,
    };
    if (!name || !email || !title || !message || !mailgunKey || !domain) {
      throw new Error(JSON.stringify({ status: MessagesSendStatus[449] }));
    }
    const mg = mailgun.client({
      username: "api",
      key: mailgunKey,
    });
    const result: MessagesSendResult = await mg.messages.create(domain, {
      from: `${name}<${email}>`,
      to: ["etan@heyman.net"],
      subject: `Alguien te contactó desde CasonaDiezDiez`,
      text: `${message}`,
      html: `<h1>${title}</h1>
        <p>${message}</p>`,
    });
    const { status, id } = result;
    if (!status || !id) {
      throw new Error(JSON.stringify({ status: MessagesSendStatus[401] }));
    }
    return {
      status,
      id,
    };
  } catch (error: any) {
    console.log(error, "handleEmailSend error");
    return {
      status: error.status,
    };
  }
};
