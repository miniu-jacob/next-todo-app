'use client';
// import useModal from '@/hooks/useModal';
import useModalStore from '@/store/useModalStore';
import useTaskStore from '@/store/useTaskStore';
import { useState } from 'react';

const AddTaskModal = () => {
    // Zustand 도입으로 인한 주석처리
    // 할일 등록을 위한 useTask 훅 사용
    // const { taskList, addTask } = useTask();
    const { toggleModal } = useModalStore();
    const { taskList, addTask } = useTaskStore();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };

    const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.length > 0) {
            addTask(inputValue);
            setInputValue('');
            console.log('Input', e.currentTarget.value);
            console.log('taskList: ', taskList);
        }
    };

    const handleAddTask = () => {
        if (inputValue.length > 0) {
            addTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className='flex bg-black bg-opacity-50 fixed inset-0 items-center justify-center '>
            <div className='bg-white shadow-lg p-6 flex flex-col gap-4 rounded-xl'>
                <h2 className='text-xl font-rix '>할일을 등록하세요</h2>
                <div className='font-rix flex gap-2'>
                    <input
                        type='text'
                        placeholder='할일 입력'
                        value={inputValue}
                        className='bg-gray-200 p-2 rounded-md outline-none'
                        onChange={handleInputChange}
                        onKeyDown={handleInputEnter}
                    />
                    <button
                        className='px-4 py-2 bg-blue-500 text-white rounded-md font-medium font-rix'
                        onClick={handleAddTask}
                    >
                        추가
                    </button>
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <button
                        className='px-4 py-2 bg-red-400 rounded-md text-white font-medium w-full font-rix'
                        onClick={toggleModal}
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;
