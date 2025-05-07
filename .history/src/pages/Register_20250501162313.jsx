import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/auth.css'
import { useState } from 'react';

import {signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import {auth, provider_google, provider_git } from "../firebase/firebase.js"
    


const Register = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const handleGoogleLogin = async () => {

        try{
            const result = await signInWithPopup(auth, provider_google)
            console.log(result.user);
            navigate('/login');

        }

        catch (Error){
            console.log("Error signinh up with Google", Error)

        }



    }

    const handleGitLogin = async () => {

        try{
            const result = await signInWithPopup(auth, provider_git)
            console.log(result.user)
            navigate('/login');

        }

        catch (error){
            console.log('Error logging in with Github', Error)
        }

        
    }

    const handleSignUp = async () => {

        try{

            const result = await createUserWithEmailAndPassword(auth, email, password)
            console.log(result.user)
            navigate('/login');
        }

        catch (Error) {

            console.log("Error Creating User", Error)
        }

    }

    return(
        <div className="auth-container">
            <div className='register'>
                <div>
                    <h1 className='auth-title'>Register</h1>
                </div>


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
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>


                    <div>
                        <h4>Password</h4>
                    </div>
                    <div>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
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