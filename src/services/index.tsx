import axios from "axios";
import authService from "./auth";
import aiService from "./ai";
import diarySerivce from "./diary";

export const defaultAxios = axios.create({
  baseURL: "http://13.209.7.147:3000/api",
});

export const aiAxios = axios.create({
  baseURL: "http://eunki.pythonanywhere.com",
});

const service = {
  auth: authService,
  diary: diarySerivce,
  ai: aiService,
};

export default service;
