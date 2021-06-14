import React, { useState } from 'react';
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import './Header.scss'

const scrambleTexts = [
    'Full Stack Web Developer',
    'UI/UX Designer',
    'Competitive Programmer'
]

const Header = () => {
    return (
        <div className='container'>
        <div className='d-flex justify-content-center align-items-center min-h-92 px-5'>
            <div className=''>
                <div className='pb-4'>
                    <div className='d-flex'>
                        <h2 className='color-5 welcome text-start m-0 p-0 me-2 mb-3'>Hey there, good people!</h2>
                        <img style={{ height: '25px', mixBlendMode: 'difference' }} src="https://emojis.slackmojis.com/emojis/images/1565879801/6181/waving_hand_animated.gif?1565879801" alt="" />
                    </div>
                    <div>
                        <p className='color-5 text-2 text-start m-0 p-0'>My name is</p>
                        <h2 className='color-5 text-start m-0 p-0 name w-100'>Mehedi <span className='color-4'>Hasan Parash </span> </h2>
                    </div>
                </div>
                <div className='mw-100'>
                    <div className='Example scramble-text color-3 pb-5 mw-100'>
                        <span className='Example__blinker'>_</span>
                        <TextScramble
                            texts={scrambleTexts}
                            letterSpeed={5}
                            nextLetterSpeed={100}
                            pauseTime={2000}
                        />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className="btn btn-dark btn-brand px-4 py-2 me-2">
                        <a href="https://drive.google.com/uc?export=download&id=1_79QYcxzFJwx5mXz3te0RTZsFAxd_j5X" className='text-decoration-none color-5'>Resume</a>
                    </button>
                    <button className="btn btn-dark btn-brand-fill px-4 py-2">
                        <a href="https://www.linkedin.com/in/mehedi-hasan-parash/" className='text-decoration-none color-1' target='_blank'>Hire Me</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;