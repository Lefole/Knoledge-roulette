import { axiosInstance } from "../config/axios_config";

export const updateDareResult = async (recordId: string) => {
  const url = `records/add_challenge_point`;
  const gameRecord = await axiosInstance.put(
    url,
    {},
    { params: { record_id: recordId, amount: 2 } }
  );
  return gameRecord.data;
};
