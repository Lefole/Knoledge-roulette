import { create } from "zustand";

interface ParticipantState {
  participantId: string;
  setCurrentParticipant: (participantId: string) => void;
}

export const useParticipantStore = create<ParticipantState>((set) => ({
  participantId: "",
  setCurrentParticipant: (participantId: string) =>
    set(() => ({ participantId: participantId })),
}));
