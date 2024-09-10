'use client';
const AddTaskButton = () => {
    return (
        <div
            className=' bg-green-400 w-20 h-20 rounded-full
        -bottom-[40px] transform -translate-x-1/2 -translate-y-1/2 absolute
            flex items-center justify-center ring-2 ring-gray-200 
    '
        >
            <button className='text-5xl absolute bottom-5'>+</button>
        </div>
    );
};

export default AddTaskButton;
