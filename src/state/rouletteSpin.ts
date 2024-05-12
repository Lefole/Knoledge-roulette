import { create } from "zustand";

interface rouletteSpinStore {
  roulete_result: number;
  startSpin: boolean;
  setRouletteResult: (rouletResult: number) => void;
  setStartSpin: (spin: boolean) => void;
}

export const useRouletteSpin = create<rouletteSpinStore>((set) => ({
  roulete_result: -1,
  startSpin: false,
  setRouletteResult: (rouletResult: number) =>
    set(() => ({ roulete_result: rouletResult })),
  setStartSpin: (spin: boolean) => set(() => ({ startSpin: spin })),
}));
