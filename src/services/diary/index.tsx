import { defaultAxios } from "..";
import axios from "axios";
import { CreateDiaryReqT } from "./type";

const diarySerivce = {
  createDiary: async (req: CreateDiaryReqT) => {
    console.log("req", req);
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log("accessToekn", accessToken);
      const res = await axios.post("/diary/create", req, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  getDiaries: async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const res = await axios.get("/user/diary", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return res.data.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};

export default diarySerivce;
