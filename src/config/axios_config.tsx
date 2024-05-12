import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://roulette-uets.onrender.com/api/v1",
  timeout: 10000,
  headers: {},
});
