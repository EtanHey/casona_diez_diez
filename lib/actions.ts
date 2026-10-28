"use server";

import { MessagesSendStatus } from "@/app/[lang]/types";
import { UTApi } from "uploadthing/server";
import { authenticateAdmin, setAdminCookie } from "./admin-auth";
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
