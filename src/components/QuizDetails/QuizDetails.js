import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quistion from '../Quistion/Quistion';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data.questions;
    return (
        <div>
            <h1>Quiz of {quizDetails.name}</h1>
            {quizDetails.map(quizQuistion => <Quistion quizQuistion={quizQuistion} key={quizQuistion.id}></Quistion>)}
        </div>
    );
};

export default QuizDetails;