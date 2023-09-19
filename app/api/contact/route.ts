import { NextRequest } from "next/server";

import FormData from "form-data";
import Mailgun, { MessagesSendResult } from "mailgun.js";
const mailgun = new Mailgun(FormData);
const domain = process.env.MAILGUN_DOMAIN;
const mailgunKey = process.env.MAILGUN_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const { name, email, title, message } = await req.json();
    if (!name || !email || !title || !message || !mailgunKey || !domain) {
      throw new Error("Missing required fields");
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
      throw new Error("Something went wrong");
    }
    return new Response(JSON.stringify({ status }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), {
      status: 404,
    });
  }
}
