import React from "react";
import Select from "react-select";
import { useParticipantsLoading } from "../../../hooks/useParticipantsLoading";
import { useParticipantStore } from "../../../state/participanStore";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CurrentParticipant: React.FC = () => {
  const [participants] = useParticipantsLoading();
  const { setCurrentParticipant } = useParticipantStore();

  return (
    <div
      className="h-14 items-center justify-start gap-10 inline-flex
        rounded-md bg-fuchsia-700 text-white px-10 mx-10"
    >
      <h3 className="w-auto text-2xl font-semibold flex-shrink-0">Turno de:</h3>
      <Select
        options={participants.map((participant) => {
          const participantAdapted = {
            value: participant.participant_id,
            label: participant.name,
          };
          return participantAdapted;
        })}
        className="w-full text-slate-800"
        onChange={(value) => {
          setCurrentParticipant(value!.value);
        }}
      />
    </div>
  );
};

export default CurrentParticipant;
