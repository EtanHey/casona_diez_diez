"use client";
import React, { BaseSyntheticEvent } from "react";

const ContactForm = () => {
  const handleEmailSend = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    let { name, email, title, message } = ev.target.elements;
    name = name.value;
    email = email.value;
    title = title.value;
    message = message.value;
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, title, message }),
    });
    console.log('here');
    
    const emailSent = await res.json();
    console.log('res.json()',await res.json());
    console.log('emailSent',emailSent);
  };
  return (
    <form
      onSubmit={handleEmailSend}
      className="flex h-fit w-full flex-col place-items-center gap-4"
    >
      <div className="flex w-full flex-col gap-2 bg-cdd-green p-4">
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="name">
            Nombre
          </label>
          <input
            className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="email">
            E-mail
          </label>
          <input
            className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="title">
            Titulo
          </label>
          <input
            className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="message">
            Mensaje
          </label>
          <textarea
            rows={6}
            className="w-full rounded-3xl p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            name="message"
            id="message"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-fit rounded-full bg-cdd-red px-8 py-[10px] font-semibold text-white"
      >
        Enviame un Mensaje
      </button>
    </form>
  );
};

export default ContactForm;
