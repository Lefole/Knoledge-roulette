import { useParticipantsLoading } from "../hooks/useParticipantsLoading";
import useParticipantsScoresLoading from "../hooks/useParticipantsScoresLoading";
import { useRoundStore } from "../state/roundStore";
import ParticipantRow from "./ParticipantRow";

const ScoreTable = () => {
  const [participantsScores, loading] = useParticipantsScoresLoading();
  const [participants, loading_participants] = useParticipantsLoading();
  const { currentParticipantIndex } = useRoundStore();
  return (
    <div className="flex flex-col">
      {!loading &&
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
            first={index == 0 && participantsScores[0].score != 0}
            currentParticipant={
              participants[currentParticipantIndex].participant_id ==
              value.participant_id
            }
          />
        ))}
    </div>
  );
};

export default ScoreTable;
