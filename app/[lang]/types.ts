export type PhotoFromServer = {
  key: string;
  url: string;
};

export enum EmailSending {
  EMPTY = "empty",
  SENDING = "sending",
  SENT = "sent",
  ERROR = "error",
}

export type ContactDict = {
  name: string;
  email: string;
  title: string;
  message: string;
  submit: string;
  success: string;
  error: {
    200: string;
    401: string;
    449: string;
  };
};

export const MessagesSendStatus = {
  200: "success",
  449: "Retry with",
  401: "Forbidden",
};
