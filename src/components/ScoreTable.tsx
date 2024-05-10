import React from "react";
import { getAllParticipants } from "../services/participantService";

const ScoreTable = () => {
  const participants = getAllParticipants();
  const orderedParticipants = participants.sort((value) => value.id);
  return (
    <div className="flex flex-col">
      {orderedParticipants.map((value) => (
        <div className="flex justify-between">
          <div>{value.name}</div>
          <div>{value.id}</div>
        </div>
      ))}
    </div>
  );
};

export default ScoreTable;
