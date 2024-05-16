import { axiosInstance } from "../config/axios_config";

export const postAnswerResult = async (optionId: number, recordId: string) => {
  const gameRecord = await axiosInstance.post("answers", {
    option_id: optionId,
    record_id: recordId,
  });
  return gameRecord.data;
};
