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
  month: number;
  year: number;
  setDiaries: (diaries: DiaryT[]) => void;
  setSelectedDiary: (diary: DiaryT) => void;
  setMonth: (month: number) => void;
};

const useDiaryStore = create(
  devtools<State>((set) => ({
    diaries: [],
    selectedDiary: null,
    month: 6,
    year: 2023,
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
    setMonth: (month: number) => {
      set((state: State) => ({
        ...state,
        month,
      }));
    },
  }))
);

export default useDiaryStore;
