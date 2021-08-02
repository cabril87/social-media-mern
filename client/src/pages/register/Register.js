import React, { useRef } from 'react'
import { useHistory } from "react-router";
import { Link } from "react-router-dom"
import axios from 'axios';
import "./register.css"

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-logo">socialbl</div>
                    <span className="login-desc">Your space, good vibes, everytime</span>
                </div>
                <div className="login-right">
                    <form className="login-box" onSubmit={handleClick}>
                        <input
                            placeholder="Username"
                            className="login-input"
                            required
                            ref={username}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="login-input"
                            required
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            className="login-input"
                            required
                            ref={password}
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            className="login-input"
                            required
                            ref={passwordAgain}
                            type="password"
                        />
                        <button
                            className="login-button"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <Link to="/login" className="login-button-register-link">
                            <button className="login-button-register">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
