import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-logo">socialbl</div>
                    <span className="login-desc">Your space, good vibes, everytime</span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input placeholder="Email" className="login-input" />
                        <input placeholder="Password" className="login-input" />
                        <button className="login-button">Login</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-button-register">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
