import { useEffect, useState } from "react";
import { LifelineModel } from "../models/lifelineModel";
import { getGameRecordByGameAndParticipant } from "../services/gameRecordService";
import { useRoundStore } from "../state/roundStore";
import { useParticipantsLoading } from "./useParticipantsLoading";

const useParticipantsLifelines = (): [LifelineModel[], boolean] => {
  const [lifelines, setLifelines] = useState<LifelineModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [participants] = useParticipantsLoading();
  const { gameId, currentParticipantIndex } = useRoundStore();
  useEffect(() => {
    setLoading(true);
    if (participants.length == 0) return;
    getGameRecordByGameAndParticipant(
      gameId,
      participants[currentParticipantIndex].participant_id
    ).then((data) => {
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
  }, [gameId, currentParticipantIndex, participants]);
  return [lifelines, loading];
};

export default useParticipantsLifelines;
