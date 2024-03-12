import React, { useEffect } from "react";
import { ContactDict, EmailSending } from "../../types";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  resetForm,
  state,
  emailSent,
  name,
  email,
  title,
  message,
  dict,
}: {
  state:
    | {
        status: number;
        id: string;
      }
    | null
    | undefined;

  emailSent: EmailSending;
  name: string;
  email: string;
  title: string;
  message: string;
  dict: ContactDict;
  resetForm: () => void;
}) => {
  useEffect(() => {
    if (state?.status === 200) {
      resetForm();
    }
  }, [state?.id]);
  const disabled = name && email && title && message ? false : true;
  const { pending } = useFormStatus();
  if (emailSent === EmailSending.SENDING && !state) return null;
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`${
        disabled ? "bg-cdd-red/40" : "bg-cdd-red"
      } w-fit rounded-full px-8 py-[10px] font-semibold text-white`}
    >
      {emailSent === EmailSending.ERROR && "x"}
      {pending && "..."}
      {emailSent === EmailSending.EMPTY && !pending && `${dict.submit}`}
    </button>
  );
};

export default SubmitButton;
