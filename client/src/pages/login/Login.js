import React, { useContext, useRef, useState } from 'react'
import { loginCall } from "../../api.js";
import { AuthContext } from "../../context/AuthContext";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./login.css"

const Login = () => {
    const email = useRef();
    const password = useRef();
    let [loading, setLoading] = useState(true);
   
    const { user, isFetching, dispatch } = useContext(AuthContext);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    const loginHandleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    
    console.log(user)

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-logo">socialbl</div>
                    <span className="login-desc">Your space, good vibes, everytime</span>
                </div>
                <div className="login-right">
                    <form
                        className="login-box"
                        onSubmit={loginHandleClick}
                    >
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="login-input"
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="login-input"
                            ref={password}
                        />
                        
                        <button
                            onClick={() => setLoading(!loading)}
                            className="login-button"
                            type="submit"
                            disabled={isFetching}
                        >
                            {isFetching ? (
                                <PacmanLoader
                                    
                                    css=''
                                    size={10}
                                    color="#00000"
                                    loading={loading}
                                    speedMultiplier= '1'
                                />
                            ) : (
                                "Log In"
                            )}
                        </button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-button-register"
                        onClick={() => setLoading(!loading)}
                        >
                            {isFetching ? (
                                <PacmanLoader
                                    css={override}
                                    size={10}
                                />
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
