import useTaskStore from '@/store/useTaskStore';
import { MdDeleteOutline, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
// import useTask from '@/hooks/useTaskManager';

const TodoList = () => {
    const { taskList, deleteTask, checkTask } = useTaskStore();
    // console.log('taskList on TodoList: ', taskList);
    return (
        <div className='flex items-center justify-between flex-col gap-4'>
            {taskList &&
                taskList.map((task, index: number) => (
                    <div className='flex items-center justify-between w-full gap-4' key={index}>
                        <h1
                            className={`py-2 px-4  w-full rounded-lg font-rix text-xl
                            ${task.isCompleted === true ? 'bg-gray-200 line-through text-gray-400  ' : ''}
                            `}
                        >
                            {task.title}
                        </h1>
                        <div className='flex gap-2'>
                            {task.isCompleted === true ? (
                                <div className='bg-purple-400 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'>
                                    <MdOutlineCheckBox className='w-6 h-6' onClick={() => checkTask(task.id)} />
                                </div>
                            ) : (
                                <div className='bg-purple-400 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'>
                                    {/* <MdOutlineCheckBox className='w-6 h-6' /> */}
                                    <MdOutlineCheckBoxOutlineBlank
                                        className='w-6 h-6'
                                        onClick={() => checkTask(task.id)}
                                    />
                                </div>
                            )}

                            <div
                                className='bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'
                                onClick={() => deleteTask(task.id)}
                            >
                                <MdDeleteOutline className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TodoList;
