import { create } from "zustand";

interface GameState {
  gameId: string;
  setGameId: (gameId: string) => void;
}

export const useGameStore = create<GameState>((set) => ({
  gameId: "",
  setGameId: (gameId: string) => set(() => ({ gameId: gameId })),
}));
