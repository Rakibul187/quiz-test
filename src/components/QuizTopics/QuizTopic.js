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
                <Link className='bg-orange-500 hover:bg-orange-300 text-slate-100 font-semibold rounded-md py-1 px-4' to={`/quiz/${quizTopic.id}`}>Take Test </Link>
            </div>
        </div>
    );
};

export default QuizTopic;