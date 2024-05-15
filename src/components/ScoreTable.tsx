import { useParticipantsLoading } from "../hooks/useParticipantsLoading";
import useParticipantsScoresLoading from "../hooks/useParticipantsScoresLoading";
import { useParticipantStore } from "../state/participanStore";
import ParticipantRow from "./ParticipantRow";

const ScoreTable = () => {
  const [participantsScores, loading_scores] = useParticipantsScoresLoading();
  const [participants, loading_participants] = useParticipantsLoading();
  const { participantId } = useParticipantStore();
  console.log(participants);
  console.log(participantsScores);

  return (
    <div className="w-full max-h-[100px]">
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
          />
        ))}
    </div>
  );
};

export default ScoreTable;
