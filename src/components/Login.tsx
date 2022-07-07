import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {
    const [signUp, setSignup] = useState(() => true);
    const [isPressed, setIsPressed] = useState(() => true);

    const handleSignOption = (value: boolean | null): void => {
        setSignup(value);
    };

    return (
        <>
            <div className="btn-group-login">
                <button onClick={() => handleSignOption(true)}>Sign Up!</button>
                <button onClick={() => handleSignOption(false)}>
                    Sign In!
                </button>
            </div>
            <h3 className="subtitle">The best platform for you</h3>
            {signUp ? <SignUp /> : <SignIn />}
        </>
    );
};

export default Login;
