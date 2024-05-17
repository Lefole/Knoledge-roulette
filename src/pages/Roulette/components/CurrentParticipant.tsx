import React from "react";
import Select from "react-select";
import { useParticipantsLoading } from "../../../hooks/useParticipantsLoading";
import { useParticipantStore } from "../../../state/participanStore";
import { Link } from "react-router-dom";

const CurrentParticipant: React.FC = () => {
  const [participants] = useParticipantsLoading();
  const { setCurrentParticipant } = useParticipantStore();

  return (
    <div
      className="z-10 h-14 items-center justify-start gap-10 inline-flex
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
      <Link
        className="bg-blue-600 h-8 flex justify-center items-center p-2 rounded-md flex-shrink-0
      hover:bg-blue-700 active:bg-blue-800"
        to={"../resume"}
      >
        Puntuación
      </Link>
    </div>
  );
};

export default CurrentParticipant;
