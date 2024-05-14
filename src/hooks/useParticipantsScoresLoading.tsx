import { useEffect, useState } from "react";
import { getScoresFromAllParticipants } from "../services/gameRecordService";
import { useRoundStore } from "../state/roundStore";

export interface Score {
  participant_id: string;
  score: number;
}

const useParticipantsScoresLoading = (): [Score[], boolean] => {
  const [participantsScores, setParticipantsScores] = useState<Score[]>([]);
  const { gameId } = useRoundStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getScoresFromAllParticipants(gameId).then((data: Score[]) => {
      setParticipantsScores(data.sort((a, b) => b.score - a.score));
    });
    setLoading(false);
  }, [gameId]);
  return [participantsScores, loading];
};

export default useParticipantsScoresLoading;
