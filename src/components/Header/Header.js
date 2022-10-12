import React from 'react';
import img from '../components/../../images/cover.jpg'

const Header = () => {
    return (
        <div className='lg:flex lg:justify-around align-middle items-center text-center p-12'>
            <div className='w-[50%] ml-12 mx-auto'>
                <img className='w-[100%]' src={img} alt='' />
            </div>
            <div className='w-[50%] text-xl font-bold '>
                <h1 className='text-left'>Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.</h1>
            </div>

        </div>
    );
};

export default Header;