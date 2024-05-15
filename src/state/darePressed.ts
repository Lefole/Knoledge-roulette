import { create } from "zustand";

interface DarePressedProps {
  dare_complete: boolean;
  setDareComplete: (dareComplete: boolean) => void;
}

export const useDarePressed = create<DarePressedProps>((set) => ({
  dare_complete: false,
  setDareComplete: (dareComplete: boolean) =>
    set(() => ({ dare_complete: dareComplete })),
}));
