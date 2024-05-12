import { useEffect, useState } from "react";
import { ParticipantModel } from "../models/participantModel";
import { getAllParticipants } from "../services/participantService";

const useParticipantsLoading = (
  ordered?: boolean
): [ParticipantModel[], boolean] => {
  const [participants, setParticipants] = useState<ParticipantModel[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllParticipants().then((data) => {
      if (ordered) {
        setParticipants(
          [
            {
              id: data[0].id,
              name: data[0].id,
              score: data[0].id,
            } as ParticipantModel,
            {
              id: data[1].id,
              name: data[1].id,
              score: data[1].id,
            } as ParticipantModel,
          ].sort(
            (a: ParticipantModel, b: ParticipantModel) => b.score - a.score
          )
        );
      } else {
        setParticipants([
          { id: data[0].id, name: data[0].name } as ParticipantModel,
          { id: data[1].id, name: data[1].name } as ParticipantModel,
        ]);
        //setParticipants(data);
      }
    });
    setLoading(false);
  }, []);
  return [participants, loading];
};

export default useParticipantsLoading;
