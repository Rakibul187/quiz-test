import { ArrowLongRightIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
const QuizTopic = ({ quizTopic }) => {
    return (
        <div className='border p-2 rounded-md shadow-lg'>
            <div className='bg-orange-100 text-center' >
                <img className='w-48 h-48 mx-auto ' src={quizTopic.logo} alt='' />
            </div>
            <div className='flex justify-around mt-5 mb-1 '>
                <h1 className='text-xl font-bold'>{quizTopic.name}</h1>
                <Link className='bg-orange-500 flex items-center hover:bg-orange-300 text-slate-100 font-semibold rounded-md py-1 px-2' to={`/quiz/${quizTopic.id}`}>Take Test <span><ArrowLongRightIcon className='h-6 w-6 text-blue-700'></ArrowLongRightIcon></span></Link>
            </div>
        </div>
    );
};

export default QuizTopic;