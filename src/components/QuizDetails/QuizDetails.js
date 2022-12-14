import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quistion from '../Quistion/Quistion';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;

    const answerHandler = (option, quizQuistion) => {
        if (quizQuistion.correctAnswer === option) {
            toast('answer correct')
        }
        else {
            toast('wrong answer')
        }
    }
    return (
        <div className='p-12'>
            <h1 className='text-3xl font-bold ml-5 text-center'>Quiz of {quizDetails.name}</h1>
            {quizDetails.questions.map(quizQuistion => <Quistion quizQuistion={quizQuistion} answerHandler={answerHandler} key={quizQuistion.id}></Quistion>)}
            <ToastContainer autoClose={500}></ToastContainer>
        </div>
    );
};

export default QuizDetails;