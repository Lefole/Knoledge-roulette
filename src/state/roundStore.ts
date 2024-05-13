import { create } from "zustand";

interface RoundStore {
  gameId: string;
  maxRounds: number;
  currentRound: number;
  currentParticipantIndex: number;
  maxParticpants: number;
  setGame: (
    gameId: string,
    maxRounds: number,
    max_participants: number
  ) => void;
  incrementRound: () => void;
  changeParticipant: () => void;
  resetParticipantsIndex: () => void;
}

export const useRoundStore = create<RoundStore>((set) => ({
  gameId: "",
  maxRounds: 0,
  currentRound: 0,
  currentParticipantIndex: 0,
  maxParticpants: 0,
  setGame: (gameId: string, maxRounds: number, max_participants: number) =>
    set(() => ({
      gameId: gameId,
      maxRounds: maxRounds,
      maxParticpants: max_participants,
    })),
  incrementRound: () =>
    set((state) => ({ currentRound: state.currentRound + 1 })),
  changeParticipant: () =>
    set((state) => ({
      currentParticipantIndex: state.currentParticipantIndex + 1,
    })),
  resetParticipantsIndex: () => set(() => ({ currentParticipantIndex: 0 })),
}));
