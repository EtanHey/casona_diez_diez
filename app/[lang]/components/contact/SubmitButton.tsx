import React, { useEffect } from "react";
import { ContactDict, EmailSending } from "../../types";
import { useFormStatus } from "react-dom";

const SubmitButton = (
  {
    emailSent,
    name,
    email,
    title,
    message,
    dict,
  }: {
    emailSent: EmailSending;
    name: string;
    email: string;
    title: string;
    message: string;
    dict: ContactDict;
  },
  ref: any,
) => {
  const disabled = name && email && title && message ? false : true;
  const { pending } = useFormStatus();
  // const { email };
  useEffect(() => {
    console.log(ref);
  }, [ref]);
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`${
        disabled ? "bg-cdd-red/40" : "bg-cdd-red"
      } w-fit rounded-full px-8 py-[10px] font-semibold text-white`}
    >
      {emailSent === EmailSending.ERROR && "x"}
      {emailSent === EmailSending.SENT && "✓"}
      {pending && "..."}
      {emailSent === EmailSending.EMPTY && !pending && `${dict.submit}`}
    </button>
  );
};

export default SubmitButton;
