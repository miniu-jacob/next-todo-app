'use client';
import { FLIGHT_PARAMETERS } from 'next/dist/client/components/app-router-headers';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [input, setInput] = useState<number>(0);
    const [result, setResult] = useState<string | null>('');
    const [randomNum, setRandomNum] = useState<number>(0);
    const [message, setMessage] = useState('');
    const [count, setCount] = useState<number>(5);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const resetGame = () => {
        const randomNum = Math.floor(Math.random() * 100 + 1);
        setRandomNum(randomNum);
        setMessage('');
        setResult(null);
        setGameOver(false);
        setCount(5);
        console.log('새로운 게임 정답: ', randomNum);
    };

    const handleClick = () => {
        const isNumber = Number.isInteger(Number(input));
        if (isNumber && Number(input) > 0 && Number(input) < 100) {
            gamePlay();
            setCount((prev) => prev - 1);
            setMessage('');
            if (count - 1 <= 0) {
                setGameOver(true);
            }
        } else {
            setMessage('1과 100 사이의 숫자를 입력해야 합니다.');
        }
    };

    // play 함수
    const gamePlay = () => {
        // input === randomNum ? setResult('정답입니다.') : input > randomNum ? setResult('Down') : setResult('Up');
        if (input === randomNum) {
            setResult('정답입니다.');
            setGameOver(true);
        } else if (input > randomNum) {
            setResult('down');
        } else setResult('up');
        console.log('정답은: ', randomNum);
    };

    return (
        <div
            className={`bg-[url('/soju.jpg')] w-full h-screen bg-contain md:bg-cover flex flex-col items-center justify-center bg-repeat-y`}
        >
            <div className='w-[80%] md:w-[60%] lg:w-[50%] h-max  bg-white bg-opacity-60 rounded-3xl ring-8 ring-white p-4'>
                <div className='flex flex-col items-center md:mt-2 gap-2 justify-between h-max'>
                    <h1 className='text-xl md:text-2xl font-extrabold'>코알누 대학 엠티</h1>
                    <h1 className='text-xl md:text-2xl font-extrabold'>술게임</h1>
                    <h1 className='text-xl md:text-2xl font-extrabold'>죽음의 업 & 다운</h1>
                    <Image
                        src={
                            'https://media3.giphy.com/media/ug05MRGoh0wHhun7vl/200.webp?cid=ecf05e47aypi64hw0skkz6add6vlns67atkvzv8p4v3u7uvs&ep=v1_gifs_search&rid=200.webp&ct=g'
                        }
                        alt={''}
                        width={40}
                        height={40}
                        className='w-80 rounded-lg'
                        priority
                    ></Image>
                    {message ? (
                        <h1 className='text-red-600 font-semibold text-lg'>{message}</h1>
                    ) : (
                        <h1 className='text-xl font-extrabold'>죽기 싫다면 맞춰라</h1>
                    )}
                    <span>남은 기회: {count}</span>

                    {result?.toLowerCase() === 'up' ? (
                        <Image src={'/up.png'} alt={''} width={80} height={80} className='rounded-full' />
                    ) : result?.toLowerCase() === 'down' ? (
                        <Image src={'/down.png'} alt={''} width={80} height={80} className='rounded-full' />
                    ) : result ? (
                        <h1 className='text-2xl font-semibold text-blue-500 p-4'>{result}</h1>
                    ) : null}

                    <div className='flex gap-4 md:gap-4 my-2'>
                        <input
                            type='text'
                            className='rounded-lg px-4 w-max outline-none font-bold text-gray-600'
                            placeholder='1부터 100까지 숫자 입력'
                            onChange={(e) => setInput(Number(e.currentTarget.value))}
                        />
                        <button
                            className='bg-green-600 px-4 py-2 rounded-3xl disabled:bg-gray-200
                                disabled:text-gray-500 font-semibold font-sans
                            '
                            onClick={handleClick}
                            disabled={gameOver}
                        >
                            Go!!
                        </button>
                    </div>
                </div>
            </div>
            <button
                className='mt-4 px-3 py-2 bg-yellow-300 rounded-2xl font-bold w-[80%] md:w-[10%]'
                onClick={() => resetGame()}
            >
                리셋!
            </button>
        </div>
    );
}
