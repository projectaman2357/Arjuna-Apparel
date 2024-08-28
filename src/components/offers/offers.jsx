import React from 'react';
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const offers = () => {
    return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>only on best sellers products</p>
        <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=''/>

        </div>

    </div>
    )
}

export default offers