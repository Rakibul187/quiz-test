import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ quizTopic }) => {
    return (
        <div className=''>
            <div className='bg-red-200' >
                <img className='w-48 h-48 ' src={quizTopic.logo} alt='' />
            </div>
            <div className='flex justify-around my-5 '>
                <h1>{quizTopic.name}</h1>
                <Link to={`/quiz/${quizTopic.id}`}>Take Test </Link>
            </div>
        </div>
    );
};

export default QuizTopic;