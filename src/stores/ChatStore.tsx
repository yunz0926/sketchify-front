import create from "zustand";
import { devtools } from "zustand/middleware";
import { MessageT } from "../services/ai/type";

type State = {
  chats: MessageT[];
  imgs: string[];
  koreanDiary: string;
  englishDiary: string;
  updateChat: (chats: MessageT) => void;
  setImgs: (imgs: string[]) => void;
  setKoreanDiary: (koreaDiary: string) => void;
  setEnglishDiary: (englishDiary: string) => void;
};

const useChatStore = create(
  devtools<State>((set) => ({
    chats: [
      {
        role: "system",
        content:
          "안녕하세요, 윤지님. 일기 작성을 도와드리겠습니다. 어떤 일이 있으셨나요? 이야기를 들려주세요.",
      },
    ],
    imgs: [],
    koreanDiary: "",
    englishDiary: "",
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
