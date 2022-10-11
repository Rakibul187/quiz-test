import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';

const Home = () => {
    const quizes = useLoaderData().data;
    return (
        <div>
            {quizes.map(quizTopic => <QuizTopics quizTopic={quizTopic} key={quizTopic.id}></QuizTopics>)}
        </div>
    );
};

export default Home;