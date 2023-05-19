import axios from "axios";
import * as fs from "fs";
import { Configuration } from "openai";
import { ChatRequestT, GenerateImgRequestT } from "./type";
import { aiAxios } from "..";

class CustomFormData extends FormData {
  getHeaders() {
    return {};
  }
}

const aiService = {
  async chatGPT(req: ChatRequestT) {
    try {
      const res = await aiAxios.post("/product/", req);
      console.log("res", res);
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  async generateImage(req: GenerateImgRequestT) {
    try {
      const res = await aiAxios.post("/image/", req);
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  /*
  async speachToText(req: any) {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      formDataCtor: CustomFormData,
    });

    delete configuration.baseOptions.headers["User-Agent"];

    const formData = new FormData();
    console.log("file", req);
    formData.append("file", req);
    formData.append("model", "whisper-1");

    const res = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
    return res;
  },*/
};

export default aiService;
