// src/sore/useTaskStore.ts
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

// * 1. 할일(Task) 인터페이스 정의
interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

// * 2. 할일(Task) 의 상태 및 동작을 정의 (함수)
interface TaskState {
    taskList: Task[];
    addTask: (title: string) => void;
    checkTask: (id: string) => void;
    deleteTask: (id: string) => void;
    // 알림 메시지를 저장할 상태
    notification: string;
    notificationColor: string;
    // 알림 메시지 초기화
    clearNotification: () => void;
}

// * 3. Zustand 스토어 정의
const useTaskStore = create<TaskState>((set) => ({
    taskList: [],
    notification: '',
    notificationColor: '',

    // 할일에 대한 함수 액션 등록
    addTask: (title: string) =>
        set((state) => ({
            taskList: [
                ...state.taskList,
                {
                    id: uuidv4(),
                    title,
                    isCompleted: false
                }
            ],
            notification: `"${title}" 할일이 추가되었습니다.`,
            notificationColor: 'text-green-500'
        })),
    // deleteTask: (id: string) => set((state) => ({ taskList: state.taskList.filter((e) => e.id !== id) })),
    deleteTask: (id: string) =>
        set((state) => {
            const taskToDelete = state.taskList.find((task) => task.id === id);
            return {
                taskList: state.taskList.filter((task) => task.id !== id),
                notification: taskToDelete ? `"${taskToDelete.title}" 할일이 삭제되었습니다.` : '',
                notificationColor: 'text-red-500'
            };
        }),
    checkTask: (id: string) =>
        set((state) => ({
            taskList: state.taskList.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        })),
    // 알림 초기화
    clearNotification: () => set(() => ({ notification: '' }))
}));

export default useTaskStore;
