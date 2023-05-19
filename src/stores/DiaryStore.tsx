import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type DiaryT = {
  created_at: string;
  diary_content: string;
  diary_id: number;
  diary_img: string;
  modified_at: string;
  user_id: number;
};

type State = {
  diaries: DiaryT[];
  selectedDiary: DiaryT | null;
  setDiaries: (diaries: DiaryT[]) => void;
  setSelectedDiary: (diary: DiaryT) => void;
};

const useDiaryStore = create(
  devtools<State>((set) => ({
    diaries: [],
    selectedDiary: null,
    setDiaries: (diaries: DiaryT[]) => {
      set((state: State) => ({
        ...state,
        diaries,
      }));
    },
    setSelectedDiary: (diary: DiaryT) => {
      set((state: State) => ({
        ...state,
        selectedDiary: diary,
      }));
    },
  }))
);

export default useDiaryStore;
