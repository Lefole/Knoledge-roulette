import { useEffect, useState } from "react";
import { getScoresFromAllParticipants } from "../services/gameRecordService";

import { useOptionPressed } from "../state/optionPressed";
import { useDarePressed } from "../state/darePressed";
import { useGameStore } from "../state/gameStore";

export interface Score {
  participant_id: string;
  score: number;
}

const useParticipantsScoresLoading = (): [Score[], boolean] => {
  const [participantsScores, setParticipantsScores] = useState<Score[]>([]);
  const { gameId } = useGameStore();
  const { option } = useOptionPressed();
  const { dare_complete } = useDarePressed();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getScoresFromAllParticipants(gameId).then((data: Score[]) => {
      setParticipantsScores(data.sort((a, b) => b.score - a.score));
      setLoading(false);
    });
  }, [gameId, option, dare_complete]);
  return [participantsScores, loading];
};

export default useParticipantsScoresLoading;
