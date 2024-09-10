'use client';
import AddTaskButton from '@/components/addTaskButton';
import AddTaskModal from '@/components/AddTaskModal';
import TodoList from '@/components/TodoList';
import useModalStore from '@/store/useModalStore';
import useTaskStore from '@/store/useTaskStore';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
// import useModal from '@/hooks/useModal';

export default function Home() {
    // 모달 상태 관리
    // const { isModalOpen, toggleModal, closeModal } = useModal();
    const { isModalOpen, toggleModal } = useModalStore();
    const { notification, clearNotification, notificationColor } = useTaskStore();

    // 날짜와 시간 상태 관리
    // 브라우저 타임존의 현재 날짜
    const [currentDate, setCurrentDate] = useState<DateTime | null>(null);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                clearNotification();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification, clearNotification]);

    // 시간 갱신용 useEffect
    useEffect(() => {
        const timeInterval = setInterval(() => {
            // 브라우저 타임존의 현재 시간
            const now = DateTime.local();
            setCurrentDate(now);
            setCurrentTime(now.toFormat('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div className='w-full h-screen flex flex-col bg-gray-200 rounded-md justify-center items-center relative'>
            <div className='w-[400px] h-24 flex p-8 items-center justify-between bg-white rounded-t-xl '>
                {/* TOP */}
                <div className='flex gap-2'>
                    <h1 className='text-4xl font-semibold font-rix'>{currentDate ? currentDate.toFormat('dd') : ''}</h1>
                    <div className='flex flex-col text-sm font-semibold font-rix '>
                        <div className='font-rix'>{currentDate ? currentDate.toFormat('MMM').toUpperCase() : ''}</div>
                        <div className='font-rix'>{currentDate ? currentDate.toFormat('yyyy') : ''}</div>
                    </div>
                </div>
                <h2 className='text-2xl font-rix'>{currentTime}</h2>
                <h3 className='text-md font-semibold font-rix'>{currentDate ? currentDate.toFormat('EEEE') : ''}</h3>
            </div>
            {/* MAIN */}
            <div className='w-[400px] flex flex-col p-2 items-center justify-between bg-white h-[calc(100vh-142px)]'>
                <div className='w-[360px] h-[80%] border-4 border-blue-500 flex rounded-lg flex-col p-2 gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.5)] overflow-y-scroll'>
                    <TodoList />
                </div>
                {notification && (
                    <div
                        className={`mb-16 font-rix font-semibold tracking-widest 
                    ${notificationColor === 'text-green-500' ? 'text-green-500' : 'text-red-500'}`}
                    >
                        {notification}
                    </div>
                )}
            </div>
            {/* BUTTON */}
            <div className=' cursor-pointer' onClick={toggleModal}>
                <AddTaskButton />
            </div>
            {isModalOpen && <AddTaskModal />}
        </div>
    );
}
