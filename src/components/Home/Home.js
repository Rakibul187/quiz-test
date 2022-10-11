import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopics/QuizTopic';

const Home = () => {
    const quizes = useLoaderData().data;
    return (
        <div>
            {quizes.map(quizTopic => <QuizTopic quizTopic={quizTopic} key={quizTopic.id}></QuizTopic>)}
        </div>
    );
};

export default Home;