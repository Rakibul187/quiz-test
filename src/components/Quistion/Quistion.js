import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BeakerIcon } from '@heroicons/react/24/solid'


const Quistion = ({ quizQuistion, answerHandler }) => {
    const { question, options } = quizQuistion

    const showAnsHandler = (ansher) => {
        toast(ansher)
    }
    return (
        <div className='bg-teal-100 m-5 border p-3 rounded-lg relative'>
            <div>
                <h3 className='text-xl font-bold '>
                    {question.replace(/(<([^>]+)>)/ig, '')}
                </h3>

                <p>
                    <p> {options.map(option => <button className='bg-slate-100 text-slate-900 px-3 py-1 rounded-md m-2' key={option} onClick={() => answerHandler(option, quizQuistion)} type='checkbox'>{option}</button>)}</p>
                </p>


            </div>
            <div>
                <button className='absolute top-5 right-5  px-3 py-1' onClick={() => showAnsHandler(quizQuistion.correctAnswer)}> <BeakerIcon className="h-6 w-6 text-blue-500"></BeakerIcon></button>
                <ToastContainer autoClose={500} />
            </div>
        </div>
    );
};

export default Quistion;