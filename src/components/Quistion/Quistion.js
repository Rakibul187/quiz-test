import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quistion = ({ quizQuistion, answerHandler }) => {
    const { question, options } = quizQuistion

    const showAnsHandler = (ansher) => {
        toast(ansher)
    }
    return (
        <div className='bg-red-25 m-5 border p-3 rounded-lg relative'>
            <div>
                <h3 className='text-lg font-semibold text-orange-800'>
                    {question.replace(/(<([^>]+)>)/ig, '')}
                </h3>

                <p>
                    <p> {options.map(option => <button className='bg-red-300 m-2' key={option} onClick={() => answerHandler(option, quizQuistion)} type='checkbox'>{option}</button>)}</p>
                </p>


            </div>
            <div>
                <button className='absolute top-5 right-5' onClick={() => showAnsHandler(quizQuistion.correctAnswer)}>answer</button>
                <ToastContainer autoClose={500} />
            </div>
        </div>
    );
};

export default Quistion;