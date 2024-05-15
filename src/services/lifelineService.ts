import { axiosInstance } from "../config/axios_config";

const updateLifelineStatus = async (
  recordId: string,
  lifelineIndex: number
) => {
  const updatedStatus = await axiosInstance.put(
    "records/comodindindin",
    {},
    { params: { record_id: recordId, comodindindin: lifelineIndex } }
  );
  console.log(updatedStatus.data);
  return updatedStatus.data;
};

export { updateLifelineStatus };
