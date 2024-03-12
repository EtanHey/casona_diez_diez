"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { ContactDict, EmailSending } from "../../types";
import { useFormState } from "react-dom";

const ContactForm = ({
  dict,
  handleEmailSend,
}: {
  dict: ContactDict;
  handleEmailSend: (
    currentState: any,
    formData: FormData,
  ) => Promise<
    | {
        status: number;
        id: string;
      }
    | undefined
  >;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState<EmailSending>(EmailSending.EMPTY);
  const [state, formAction] = useFormState(handleEmailSend, null);
  const resetForm = () => {
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
    setEmailSent(EmailSending.EMPTY);
  };

  return (
    <form
      action={formAction}
      className="flex h-fit w-full flex-col place-items-center gap-4"
    >
      <div className="flex w-full  flex-col gap-2 bg-cdd-green p-4">
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="name">
            {dict.name}
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="email">
            {dict.email}
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="title">
            {dict.title}
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="w-full rounded-full p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="message">
            {dict.message}
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
            rows={6}
            className="w-full rounded-3xl p-[10px] shadow-[0px_1.0px_2.0px_0px] shadow-black/[15%]"
            name="message"
            id="message"
          />
        </div>
      </div>

      <SubmitButton
        resetForm={resetForm}
        emailSent={emailSent}
        name={name}
        email={email}
        title={title}
        message={message}
        dict={dict}
        state={state}
      />
    </form>
  );
};

export default ContactForm;
