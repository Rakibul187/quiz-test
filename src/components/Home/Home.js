import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizTopic from '../QuizTopics/QuizTopic';

const Home = () => {
    const quizesData = useLoaderData();
    const { data } = quizesData
    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 m-12'>
                {data.map(quizTopic => <QuizTopic quizTopic={quizTopic} key={quizTopic.id}></QuizTopic>)}
            </div>
        </div>
    );
};

export default Home;