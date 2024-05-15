import { axiosInstance } from "../config/axios_config";

export const postAnswerResult = async (optionId: number, recordId: string) => {
  console.log(optionId);
  console.log(recordId);
  const gameRecord = await axiosInstance.post("answers", {
    option_id: optionId,
    record_id: recordId,
  });
  return gameRecord.data;
};
