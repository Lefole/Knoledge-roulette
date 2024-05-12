import { axiosInstance } from "../config/axios_config";

export const getPartipantById = (idParticipant: number) => {
  console.log(idParticipant);
  return [];
};

export const getAllParticipants = async () => {
  const participants_req = await axiosInstance.get(
    "https://fakestoreapi.com/products/"
  );
  return participants_req.data;
};

export const getLifelinesStatusFromParticipant = (idParticipant: number) => {
  console.log(idParticipant);
  return [];
};
