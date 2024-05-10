import { ParticipantModel } from "../models/participantModel";

const getPartipantById = (idParticipant: number) => {
  console.log(idParticipant);
  return [];
};

const getAllParticipants = () => {
  const participants: ParticipantModel[] = [
    { id: 1, name: "Pepe Nacho" },
    { id: 2, name: "Carlo Julio" },
    { id: 3, name: "Swalalala" },
  ];
  return participants;
};

const getAllParticipantsWithScores = () => {
  return [];
};

const getLifelinesStatusFromParticipant = (idParticipant: number) => {
  console.log(idParticipant);
  return [];
};

export {
  getPartipantById,
  getAllParticipants,
  getAllParticipantsWithScores,
  getLifelinesStatusFromParticipant,
};
