import { create } from "zustand";

interface RoundStore {
  currentRound: number;
  currentParticipantIndex: number;
  incrementRound: () => void;
  changeParticipant: () => void;
  resetParticipantsIndex: () => void;
}

export const useRoundStore = create<RoundStore>((set) => ({
  currentRound: 0,
  currentParticipantIndex: 0,
  incrementRound: () =>
    set((state) => ({ currentRound: state.currentRound + 1 })),
  changeParticipant: () =>
    set((state) => ({
      currentParticipantIndex: state.currentParticipantIndex + 1,
    })),
  resetParticipantsIndex: () => set(() => ({ currentParticipantIndex: 0 })),
}));
