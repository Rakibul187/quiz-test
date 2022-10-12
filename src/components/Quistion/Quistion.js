import React from 'react';
import './Quistion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quistion = ({ quizQuistion, answerHandler }) => {
    const { question, options } = quizQuistion

    const showAnsHandler = (ansher) => {
        toast(ansher)
    }
    return (
        <div>
            <div>
                <h3>
                    {question.replace(/(<([^>]+)>)/ig, '')}
                </h3>
                <p> {options.map(option => <button key={option} onClick={() => answerHandler(option, quizQuistion)} type='radio'>{option}</button>)}</p>
            </div>
            <div>
                <button onClick={() => showAnsHandler(quizQuistion.correctAnswer)}>answer</button>
                <ToastContainer autoClose={500} />
            </div>
        </div>
    );
};

export default Quistion;