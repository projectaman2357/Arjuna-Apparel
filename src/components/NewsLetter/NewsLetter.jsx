import React from 'react';
import './NewsLetter.css'
const NewsLetter = () => {
    return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>subscribe to our newsletter and stay update</p>
        <div>
            <input type="email" placeholder='your email id'/>
            <button>subcribe</button>
        </div>
    </div>
    )
}

export default NewsLetter