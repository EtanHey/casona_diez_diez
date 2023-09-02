import { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";
const sendgridApiKey = process.env.SENDGRID_API_KEY;
export async function POST(req: NextRequest) {
  try {
    const { name, email, title, message } = await req.json();
    if (sendgridApiKey) {
      sgMail.setApiKey(sendgridApiKey);
      const msg = {
        to: "etan@heyman.net", // Change to your recipient
        from: email, // Change to your verified sender
        subject: title,
        text: message,
        html: `<strong> from: ${name}, ${message} and easy to do anywhere, even with Node.js</strong>`,
      };
      sgMail
        .send(msg)
        .then(() => {

          return new Response(JSON.stringify({ message: "Email sent" }), {
            status: 200,
          });
        })
        .catch((error) => {
          console.error(error);
          throw new Error("Error sending email");
        });
    } else {
      throw new Error("No sendgrid api key");
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), {
      status: 404,
    });
  }
}
