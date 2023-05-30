import { defaultAxios } from "..";
import { AuthRequestT } from "./type";
import axios from "axios";

const authService = {
  async signUp(req: AuthRequestT) {
    try {
      const res = await axios.post("/api/user/signup", req);
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  async signIn(req: AuthRequestT) {
    try {
      const res = await axios.post("/api/user/signin", req);
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  async checkDuplicate(userName: string) {
    try {
      const res = await axios.post("/api/user/duplicated", {
        user_name: userName,
      });
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};

export default authService;
