import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ quizTopic }) => {
    return (
        <div>
            <div>
                <img src={quizTopic.logo} alt='' />
            </div>
            <div>
                <h1>{quizTopic.name}</h1>
                <Link to={`/quiz/${quizTopic.id}`}>Take Test </Link>
            </div>
        </div>
    );
};

export default QuizTopic;