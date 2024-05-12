import { create } from "zustand";

interface lifelinePressedProps {
  fifthy_fifthy: boolean;
  setFiftyPressed: (fifthy_fifthy_state: boolean) => void;
}

export const useLifelinePressed = create<lifelinePressedProps>((set) => ({
  fifthy_fifthy: false,
  setFiftyPressed: (fifthy_fifthy_state: boolean) =>
    set(() => ({ fifthy_fifthy: fifthy_fifthy_state })),
}));
