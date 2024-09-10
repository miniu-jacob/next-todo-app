import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 1. interface 정의
interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

// 2. add 함수 정의
const useTaskManager = () => {
    const [taskList, setTaskList] = useState<Task[]>([]);

    // 할일 등록 함수
    const addTask = (title: string) => {
        /* 할일을 등록 신청하면 할일 변수(taskList) 에 내용을 넣어준다. 
        * 그런데 할 일은 배열로 선언했다. 따라서 배열이 들어가야 한다.
        ! setTaskList([])
        * 배열 안에는 
            - id, title, isCompleted 가 있어야 하고
            - 기존의 값도 있어야 한다. 
            - 따라서 기존의 값은 그대로 있고 새로운 id, title, isCompleted 가 추가 되어야 한다. 
        ? 문법: setTaskList([...taskList, ...])
                                        */
        setTaskList([
            ...taskList,
            {
                id: uuidv4(),
                title,
                isCompleted: false
            }
        ]);
    };

    // 할일 체크 함수

    // 할일 삭제 함수

    return { taskList, addTask };
};

export default useTaskManager;
