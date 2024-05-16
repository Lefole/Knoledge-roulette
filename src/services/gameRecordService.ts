import { axiosInstance } from "../config/axios_config";

export const getScoresFromAllParticipants = async (gameId: string) => {
  const scores = await axiosInstance(`games/scores/${gameId}`);
  return scores.data["scores"];
};

export const getAllRecordsFromGame = async (gameId: string) => {
  const scores = await axiosInstance(`records/game/${gameId}`);
  return scores.data;
};

export const getGameRecordByGameAndParticipant = async (
  gameId: string,
  participantId: string
) => {
  const gameRecord = await axiosInstance.get("records/participant_game", {
    params: {
      game_id: gameId,
      participant_id: participantId,
    },
  });
  return gameRecord.data;
};

export const createGame = async (
  period_id: number,
  participantsList: string[],
  rounds: number
) => {
  const gameCreated = await axiosInstance.post("games", {
    period_id: period_id,
    participants: participantsList,
    rounds: rounds,
  });
  return gameCreated.data;
};
