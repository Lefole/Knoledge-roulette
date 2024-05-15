import { axiosInstance } from "../config/axios_config";

export const createNewGame = async (
  participantsIds: string[],
  period_id: number,
  rounds: number
): Promise<string | undefined> => {
  try {
    const game = await axiosInstance.post("games/", {
      participants: participantsIds,
      period_id: period_id,
      rounds: rounds,
    });
    return game.data["game_id"];
  } catch (error) {
    console.error("Game creation failed");
  }
};
