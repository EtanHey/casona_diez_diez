import React, { useEffect } from "react";
import { ContactDict, EmailSending, MessagesSendStatus } from "../../../types";
import { useFormStatus } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { MessagesSendResult } from "mailgun.js";

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
  state: MessagesSendResult;

  emailSent: EmailSending;
  name: string;
  email: string;
  title: string;
  message: string;
  dict: ContactDict;
  resetForm: () => void;
}) => {
  const { toast } = useToast();
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!state) return;
    if (state.status === 401 || state.status === 449) {
      toast({
        title: MessagesSendStatus[state.status],
        description: dict.error[state.status],
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => submitButtonRef.current?.click()}
          >
            Try again
          </ToastAction>
        ),
      });
      state.status = 0;
      state.id = "";
    }

    if (state.status === 200) {
      resetForm();
      toast({
        title: dict.success,
      });
      state.status = 0;
      state.id = "";
    }
  }, [state.id]);
  const disabled = name && email && title && message ? false : true;
  const { pending } = useFormStatus();
  if (emailSent === EmailSending.SENDING && !state) return null;
  return (
    <button
      ref={submitButtonRef}
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
