import axios from "axios";
import { ChatRequestT, GenerateImgRequestT } from "./type";

const aiService = {
  async chatGPT(req: ChatRequestT) {
    try {
      const res = await axios.post("/ai/product/", req);
      console.log("res", res);
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  async generateImage(req: GenerateImgRequestT) {
    try {
      const res = await axios.post("/ai/image/", req);
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};

export default aiService;
