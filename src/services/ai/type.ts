export type ChatRequestT = {
  username: string;
  messages: MessageT[];
};

export type ChatResponseT = MessageT[];

export type GenerateImgRequestT = {
  messages: string;
};

export type GenerateImgResponseT = {
  image0: string;
  image1: string;
  image2: string;
};

export type SpeechToTextResponseT = MessageT[];

type MessageT = {
  role: RoleT;
  content: string;
};

type RoleT = "user" | "system";
