import React from "react";
import Header from "../components/Header";
import ContactEmailLogo from "../components/svgs/contactSVGs/ContactEmailLogo";
import ContactLocationLogo from "../components/svgs/contactSVGs/ContactLocationLogo";
import ContactPhoneLogo from "../components/svgs/contactSVGs/ContactPhoneLogo";
import ContactWhatsappLogo from "../components/svgs/contactSVGs/ContactWhatsappLogo";
import { getDictionary } from "../dictionaries";
import { handleEmailSend } from "@/lib/actions";
import ContactForm from "../components/contact/ContactForm";
import Link from "next/link";

const page = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  const contactDictionary = dict.contact;

  return (
    <>
      <Header>{contactDictionary.mainText}</Header>
      <div className="mb-[70px] mt-6 flex flex-col gap-6 px-[68px]">
        <Link href="tel:+5491131998700" className="flex items-center gap-2">
          <ContactPhoneLogo />
          <span>+54 911 3199 8700</span>
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=17179629684&text=Hola%21%20%F0%9F%8F%A8%20%C2%BFTienen%20disponibilidad%20para%20%5Bfechas%5D%20para%20%5Bn%C3%BAmero%20de%20hu%C3%A9spedes%5D%20en%20una%20%5Btipo%20de%20habitaci%C3%B3n%5D%3F%20Por%20favor%2C%20compartan%20las%20tarifas%20y%20cualquier%20oferta%20especial.%20%C2%A1Gracias%21%20%F0%9F%8C%9F"
          className="flex items-center gap-2"
        >
          <ContactWhatsappLogo />
          <p>+54 911 3199 8700</p>
        </Link>
        <Link
          href="mailto:casonadiezdiez@gmail.com"
          className="flex items-center gap-2"
        >
          <ContactEmailLogo />
          <p>casonadiezdiez@gmail.com</p>
        </Link>
        <Link
          href="https://www.google.com/maps/place/Piedras+1010+%2F+SanTelmo/@-34.619862,-58.3772628,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb7d5c6e5b9a1:0x5d5e7e8d7b7a4a7!8m2!3d-34.619862!4d-58.3740743"
          className="flex items-center gap-2"
        >
          <ContactLocationLogo />
          <p>Piedras 1010/SanTelmo</p>
        </Link>
      </div>
      <ContactForm
        handleEmailSend={handleEmailSend}
        dict={contactDictionary.contactForm}
      />
    </>
  );
};

export default page;
