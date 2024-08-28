import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder='your name' />
            <input type="email" placeholder='your email id' />
            <input type="password" placeholder='password' />
        </div>
        <button>continue</button>
        <p className='loginsignup-login'>Already have an account? <span>login here</span></p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
            
        </div>
        <hr/>
        <hr/>

        </div>
        
    </div>
    
    )
}

export default LoginSignup