import React from 'react';

const QuizTopics = ({ quizTopic }) => {
    console.log(quizTopic)
    return (
        <div>
            <div>
                <img src={quizTopic.logo} alt='' />
            </div>
            <div>
                <h1>{quizTopic.name}</h1>
                <button>Take Test</button>
            </div>
        </div>
    );
};

export default QuizTopics;