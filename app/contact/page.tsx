import React from "react";
import Header from "../components/Header";
import ContactPhoneLogo from "../components/svgs/contactSVGs/ContactPhoneLogo";
import ContactWhatsappLogo from "../components/svgs/contactSVGs/ContactWhatsappLogo";
import ContactEmailLogo from "../components/svgs/contactSVGs/ContactEmailLogo";
import ContactLocationLogo from "../components/svgs/contactSVGs/ContactLocationLogo";

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
      <form className="flex place-items-center flex-col h-fit w-full gap-4">
        <div className=" w-full flex-col gap-2 bg-cdd-green p-4">
          <span className="flex flex-col gap-1">
            <label className="text-lg text-white" htmlFor="name">
              Nombre
            </label>
            <input
              className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
              type="text"
              name="name"
              id="name"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label className="text-lg text-white" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
              type="text"
              name="email"
              id="email"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label className="text-lg text-white" htmlFor="title">
              Titulo
            </label>
            <input
              className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
              type="text"
              name="title"
              id="title"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label className="text-lg text-white" htmlFor="message">
              Mensaje
            </label>
            <textarea
              rows={6}
              className="w-full rounded-3xl p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
              name="message"
              id="message"
            />
          </span>
        </div>
        <button className="font-extrabold py-[10px] px-8 text-white rounded-full bg-cdd-red w-fit">Enviame un Mensaje</button>
      </form>
    </>
  );
};

export default page;
