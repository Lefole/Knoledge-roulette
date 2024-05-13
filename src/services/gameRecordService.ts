import { axiosInstance } from "../config/axios_config";

export const getGameRecordByGameAndParticipant = async (
  gameId: number,
  participantId: string
) => {
  const gameRecord = await axiosInstance.get("gameRecord");
  return gameRecord.data;
};

export const createGame = async (
  period_id: number,
  participantsList: string[],
  rounds: number
) => {
  const gameCreated = await axiosInstance.post("game", [
    {
      period_id: period_id,
      participants_id: participantsList,
      rounds: rounds,
    },
  ]);
  return gameCreated.data;
};
