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
                <h5>
                    {question.replace(/(<([^>]+)>)/ig, '')}
                </h5>
                <p> {options.map(option => <button onClick={() => answerHandler(option, quizQuistion)} type='radio'>{option}</button>)}</p>
            </div>
            <div>
                <button onClick={() => showAnsHandler(quizQuistion.correctAnswer)}>answer</button>
                <ToastContainer autoClose={500} />
            </div>
        </div>
    );
};

export default Quistion;