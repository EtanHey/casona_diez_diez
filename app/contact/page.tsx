import React from "react";
import Header from "../components/Header";
import ContactPhoneLogo from "../components/svgs/contactSVGs/ContactPhoneLogo";
import ContactWhatsappLogo from "../components/svgs/contactSVGs/ContactWhatsappLogo";
import ContactEmailLogo from "../components/svgs/contactSVGs/ContactEmailLogo";
import ContactLocationLogo from "../components/svgs/contactSVGs/ContactLocationLogo";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <Header>Contacto</Header>
      <div className="mb-[70px] mt-6 flex flex-col gap-6 px-[68px]">
        <span className="flex items-center gap-2">
          <ContactPhoneLogo />
          <p>+54 911 3199 8700</p>
        </span>
        <span className="flex items-center gap-2">
          <ContactWhatsappLogo />
          <p>+54 911 3199 8700</p>
        </span>
        <span className="flex items-center gap-2">
          <ContactEmailLogo />
          <p>casonadiezdiez@gmail.com</p>
        </span>
        <span className="flex items-center gap-2">
          <ContactLocationLogo />
          <p>Piedras 1010/SanTelmo</p>
        </span>
      </div>
      <ContactForm />
    </>
  );
};

export default page;
