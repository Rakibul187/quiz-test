import React from 'react';
import './Quistion.css'
const Quistion = ({ quizQuistion, answerHandler }) => {
    const { question, options } = quizQuistion

    const showAnsHandler = (ansher) => {
        alert(ansher)
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
            </div>
        </div>
    );
};

export default Quistion;