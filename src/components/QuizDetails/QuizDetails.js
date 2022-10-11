import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quistion from '../Quistion/Quistion';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;

    const answerHandler = (option, quizQuistion) => {
        if (quizQuistion.correctAnswer === option) {
            alert('answer correct')
        }
        else {
            alert('wrong answer')
        }
    }
    return (
        <div>
            <h1>Quiz of {quizDetails.name}</h1>
            {quizDetails.questions.map(quizQuistion => <Quistion quizQuistion={quizQuistion} answerHandler={answerHandler} key={quizQuistion.id}></Quistion>)}
        </div>
    );
};

export default QuizDetails;