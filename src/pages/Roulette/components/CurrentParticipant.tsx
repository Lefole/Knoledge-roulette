import SelectInput from "@mui/material/Select/SelectInput";
import React from "react";

type CurrentParticipantProps = {
  participantName: string;
};

const CurrentParticipant: React.FC<CurrentParticipantProps> = ({
  participantName,
}) => {
  return (
    <div className="h-1/6">
      <div
        className="mx-10  flex h-full items-center justify-start gap-2 
        rounded-md bg-fuchsia-700 text-white"
      >
        <h3 className="ml-10 text-2xl font-semibold">Turno de:</h3>
        <SelectInput autoWidth multiple native />
        <p className="text-xl">{participantName}</p>
      </div>
    </div>
  );
};

export default CurrentParticipant;
