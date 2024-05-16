import { CircularProgress } from "@mui/material";
import { useParticipantsLoading } from "../hooks/useParticipantsLoading";
import useParticipantsScoresLoading from "../hooks/useParticipantsScoresLoading";
import { useParticipantStore } from "../state/participanStore";
import ParticipantRow from "./ParticipantRow";

const ScoreTable = () => {
  const [participantsScores, loading_scores] = useParticipantsScoresLoading();
  const [participants, loading_participants] = useParticipantsLoading();
  const { participantId } = useParticipantStore();

  return (
    <div className="w-full">
      {(loading_participants || loading_scores) && (
        <div className="flex w-full justify-center items-center">
          <CircularProgress />
        </div>
      )}
      {!loading_scores &&
        !loading_participants &&
        participantsScores.map((value, index) => (
          <ParticipantRow
            key={index}
            name={
              participants.find(
                (participant) =>
                  participant.participant_id == value.participant_id
              )!.name
            }
            score={participantsScores[index].score}
            currentParticipant={participantId == value.participant_id}
            first={
              index == 0 &&
              participantsScores.filter(
                (participant) => participant.score === value.score
              ).length == 1
            }
          />
        ))}
    </div>
  );
};

export default ScoreTable;
