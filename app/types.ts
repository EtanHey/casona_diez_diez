export type PhotoFromServer = {
  key: string;
  url: string;
};

export type Review = {
  author_name: string;
  language: string;
  profile_photo_url: string;
  relative_time_description: string;
  text: string;
  time: number;
  author_url?: string;
  rating?: number;
};

export enum EmailSending {
  EMPTY = "empty",
  SENDING = "sending",
  SENT = "sent",
  ERROR = "error",
}
