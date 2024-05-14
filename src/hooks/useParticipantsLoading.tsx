import { useEffect, useState } from "react";
import { ParticipantModel } from "../models/participantModel";
import { getAllParticipants } from "../services/participantService";

export const useParticipantsLoading = (): [ParticipantModel[], boolean] => {
  const [participants, setParticipants] = useState<ParticipantModel[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllParticipants().then((data: ParticipantModel[]) => {
      setParticipants(data);
    });
    setLoading(false);
  }, []);
  return [participants, loading];
};
