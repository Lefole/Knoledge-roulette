import { axiosInstance } from "../config/axios_config";

export const getAllParticipants = async () => {
  const participants_req = await axiosInstance.get("participants/");
  return participants_req.data;
};

export const getLifelinesStatusFromParticipant = (idParticipant: number) => {
  console.log(idParticipant);
  return [];
};
