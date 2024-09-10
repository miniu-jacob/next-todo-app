// src/store/useModalStore.ts

import { create } from 'zustand';

interface ModalState {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
    isModalOpen: false,

    openModal: () => set(() => ({ isModalOpen: true })),
    closeModal: () => set(() => ({ isModalOpen: false })),
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen }))
}));

export default useModalStore;
