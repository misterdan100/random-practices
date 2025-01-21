import { create } from "zustand";

interface State {
    modalState: boolean

    openCloseModal: (order: boolean) => void
}

export const useTodoStore = create<State>()((set) => ({
    modalState: false,
    openCloseModal: (order) => set({
        modalState: order
    })
}))