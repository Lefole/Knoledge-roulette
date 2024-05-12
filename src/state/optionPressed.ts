import { create } from "zustand";

interface optionPressedProps {
  option: number;
  setOption: (optionPressed: number) => void;
}

export const useOptionPressed = create<optionPressedProps>((set) => ({
  option: -1,
  setOption: (optionPressed: number) => set(() => ({ option: optionPressed })),
}));
