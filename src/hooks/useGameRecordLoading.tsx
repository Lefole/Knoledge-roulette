import { useEffect, useState } from "react";
import { getScoresFromAllParticipants } from "../services/gameRecordService";
import { useRoundStore } from "../state/roundStore";
import { GameRecordModel } from "../models/gameRecordModel";

const useGameRecordLoading = (): [
  scores: GameRecordModel[],
  loading: boolean
] => {
  const { gameId } = useRoundStore();
  const [scores, setScores] = useState<GameRecordModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getScoresFromAllParticipants(gameId).then((data: GameRecordModel[]) => {
      setScores(data);
    });
    setLoading(false);
  }, [gameId]);

  return [scores, loading];
};

export default useGameRecordLoading;
