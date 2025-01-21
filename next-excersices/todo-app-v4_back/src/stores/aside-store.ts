import { create } from "zustand";

interface State {
  asideOpen: boolean;
  showAside: (order: boolean) => void;
}

export const useAsideStore = create<State>()((set) => ({
    asideOpen: false,
    showAside: (order) => set({
        asideOpen: order
    })
}));
