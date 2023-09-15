"use client";
import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { EmailSending } from "../types";

const ContactForm = () => {
  // to help with lastpass plugin:

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState<EmailSending>(EmailSending.EMPTY);
  useEffect(() => {
    setTimeout(() => setEmailSent(EmailSending.EMPTY), 5000);
  }, [emailSent]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  const handleEmailSend = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    try {
      setEmailSent(EmailSending.SENDING);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, title, message }),
      });
      const { status } = await res.json();
      if (status === 200) {
        ev.target.reset();
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
        setEmailSent(EmailSending.SENT);
      }
    } catch (error) {
      console.log(error);
      setEmailSent(EmailSending.ERROR);
    }
  };
  return (
    <form
      onSubmit={handleEmailSend}
      className="flex h-fit w-full flex-col place-items-center gap-4"
    >
      <div className="flex w-full  flex-col gap-2 bg-cdd-green p-4">
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="name">
            Nombre
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
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
            onChange={(e) => setEmail(e.target.value)}
            required
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
            onChange={(e) => setTitle(e.target.value)}
            required
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
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full rounded-3xl p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            name="message"
            id="message"
          />
        </div>
      </div>
      <button
        disabled={name && email && title && message ? false : true}
        type="submit"
        className={`${
          name && email && title && message ? "bg-cdd-red" : "bg-gray-500"
        } w-fit rounded-full px-8 py-[10px] font-semibold text-white`}
      >
        {emailSent === EmailSending.ERROR && "x"}
        {emailSent === EmailSending.SENT && "✓"}
        {emailSent === EmailSending.SENDING && "..."}
        {emailSent === EmailSending.EMPTY && "Enviame un Mensaje"}
      </button>
    </form>
  );
};

export default ContactForm;
