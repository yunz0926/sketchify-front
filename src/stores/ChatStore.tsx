import create from "zustand";
import { devtools } from "zustand/middleware";
import { MessageT } from "../services/ai/type";

type State = {
  chats: MessageT[];
  imgs: string[];
  koreanDiary: string;
  englishDiary: string;
  initChat: (chat: MessageT) => void;
  updateChat: (chats: MessageT) => void;
  setImgs: (imgs: string[]) => void;
  setKoreanDiary: (koreaDiary: string) => void;
  setEnglishDiary: (englishDiary: string) => void;
};

const useChatStore = create(
  devtools<State>((set) => ({
    chats: [],
    imgs: [],
    koreanDiary: "",
    englishDiary: "",
    initChat: (chat: MessageT) => {
      set((state: State) => ({
        ...state,
        chats: [chat],
      }));
    },
    updateChat: (chat: MessageT) => {
      set((state: State) => ({
        ...state,
        chats: [...state.chats, chat],
      }));
    },
    setImgs: (imgs: string[]) => {
      set((state: State) => ({
        ...state,
        imgs,
      }));
    },
    setKoreanDiary: (koreanDiary: string) => {
      set((state: State) => ({
        ...state,
        koreanDiary,
      }));
    },
    setEnglishDiary: (englishDiary: string) => {
      set((state: State) => ({
        ...state,
        englishDiary,
      }));
    },
  }))
);

export default useChatStore;
