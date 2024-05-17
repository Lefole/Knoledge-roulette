import { useEffect, useState } from "react";
import { LifelineModel } from "../models/lifelineModel";
import { getGameRecordByGameAndParticipant } from "../services/gameRecordService";

import { useParticipantsLoading } from "./useParticipantsLoading";
import { useParticipantStore } from "../state/participanStore";
import { useGameStore } from "../state/gameStore";

const useParticipantsLifelines = (): [LifelineModel[], boolean] => {
  const [lifelines, setLifelines] = useState<LifelineModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [participants] = useParticipantsLoading();
  const { participantId } = useParticipantStore();
  const { gameId } = useGameStore();
  useEffect(() => {
    setLoading(true);
    if (participants.length == 0) return;
    getGameRecordByGameAndParticipant(gameId, participantId).then((data) => {
      setLifelines([
        { lifeline: "audience_help", isAvailable: data["audience_help"] },
        {
          lifeline: "fifty_fifty_help",
          isAvailable: data["fifty_fifty_help"],
        },
        { lifeline: "call_help", isAvailable: data["call_help"] },
      ]);
    });
    setLoading(false);
  }, [gameId, participantId, participants.length]);
  return [lifelines, loading];
};

export default useParticipantsLifelines;
