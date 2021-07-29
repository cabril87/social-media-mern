import React from 'react'
import "./register.css"

const Register = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-logo">socialbl</div>
                    <span className="login-desc">Your space, good vibes, everytime</span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input placeholder="Username" className="login-input" />
                        <input placeholder="Email" className="login-input" />
                        <input placeholder="Password" className="login-input" />
                        <input placeholder="Password Again" className="login-input" />
                        <button className="login-button">Sign Up</button>
                        <button className="login-button-register">Login to Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
