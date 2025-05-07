import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/auth.css'

import {signInWithPopup, } from "firebase/auth"
import {auth, provider_google, provider_git } from "../firebase/firebase.js"
    


const Register = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();


    const handleGoogleLogin = async () => {

        try{
            const result = await signInWithPopup(auth, provider_google)
            console.log(result.user);
            navigate('/login');

        }

        catch (Error){
            console.log("Error signing up with Google", Error)
            setError(Error.message)
        }



    }

    const handleGitLogin = async (e) => {
        e.preventDefault();

        try{
            const result = await signInWithPopup(auth, provider_git)
            console.log(result.user)
            navigate('/login');

        }

        catch (error){
            console.log('Error logging in with Github', error)
            setError(error.message)
        }

        
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try{
            console.log('Attempting to create user with email:', email); // Log email

            const result = await createUserWithEmailAndPassword(auth, email, password)
            console.log(result.user)
            navigate('/login');
        }

        catch (Error) {
            console.log("Error Creating User", Error)
            setError(Error.message)
        }

    }

    return(
        <div className="auth-container">
            <div className='register'>
                <div>
                    <h1 className='auth-title'>Register</h1>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div>
                    <button onClick={handleGoogleLogin}>Google Sign-up</button>
                </div>

                <div>
                    <button onClick={handleGitLogin}>Github Sign-up</button>
                </div>
                


                <form onSubmit={handleSignUp}>

                    <div>
                        <h4>Email</h4>
                    </div>
                    <div>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>


                    <div>
                        <h4>Password</h4>
                    </div>
                    <div>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div>
                        <button type='submit'> Submit</button>
                    </div>


                    <div>
                         <Link to="/login">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register