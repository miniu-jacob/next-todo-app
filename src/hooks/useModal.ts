import { useState } from 'react';

const useModal = () => {
    // 모달의 오픈을 관리하는 훅
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // 모달 오픈 함수
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        toggleModal
    };
};

export default useModal;
