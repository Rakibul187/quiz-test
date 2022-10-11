import React from 'react';
import './Quistion.css'
const Quistion = ({ quizQuistion }) => {
    const { question, options } = quizQuistion
    console.log(question, options)
    return (
        <div>
            <h5>
                {question.replace(/(<([^>]+)>)/ig, '')}
            </h5>
        </div>
    );
};

export default Quistion;