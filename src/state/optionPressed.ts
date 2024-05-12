import { create } from "zustand";

interface optionPressedProps {
  option: number;
  correct: boolean;
  setOption: (optionPressed: number) => void;
  setCorrect: (optionCorrect: boolean) => void;
}

export const useOptionPressed = create<optionPressedProps>((set) => ({
  option: -1,
  correct: false,
  setOption: (optionPressed: number) => set(() => ({ option: optionPressed })),
  setCorrect: (optionCorrect: boolean) =>
    set(() => ({ correct: optionCorrect })),
}));
