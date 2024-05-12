import useParticipantsLoading from "../hooks/useParticipantsLoading";
import ParticipantRow from "./ParticipantRow";

const ScoreTable = () => {
  const [participants, loading] = useParticipantsLoading(true);
  return (
    <div className="flex flex-col">
      {!loading &&
        participants.map((value, index) => (
          <ParticipantRow
            key={index}
            name={value.name}
            score={value.score}
            first={index == 0 && value.score != 0}
          />
        ))}
    </div>
  );
};

export default ScoreTable;
