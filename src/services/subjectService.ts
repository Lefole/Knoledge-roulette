import { axiosInstance } from "../config/axios_config";

export const getAllSubjects = async () => {
  const subjects = await axiosInstance.get("subjects");
  return subjects.data;
};
