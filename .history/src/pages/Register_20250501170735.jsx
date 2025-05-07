import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/auth.css'

import {signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import {auth, provider_google, provider_git } from "../firebase/firebase.js"
    


const Register = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const handleGoogleLogin = async () => {

        try{

            provider_google.setCustomParameters({
                prompt: 'select_account'  // 👈 Forces Google to always ask which account to use
            });



            const result = await signInWithPopup(auth, provider_google)
            console.log(result.user);
            navigate('/login');

        }

        catch (Error){
            console.log("Error signing up with Google", Error)

        }

    }

    const handleGitLogin = async () => {

        e.preventDefault();
        

        try{
            const result = await signInWithPopup(auth, provider_git)
            console.log(result.user)
            navigate('/login');

        }

        catch (error){
            console.log('Error logging in with Github', Error)
        }

        
    }

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            console.log('Attempting to create user with email:', email);
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created successfully:', result.user);
            navigate('/login');
        } catch (error) {
            console.error("Error Creating User:", error);
            // You can add error state and display it to the user
            alert(error.message); // Simple error feedback
        }
    }

    return(
        <div className="auth-container">
            <div className='register'>


                <div className='header-auth'>
                    <a>
                        <img src='/coding.png' alt="Code logo" width={70}/>
                    </a>
                    <h2 className='title-auth'> DevSync </h2>
                </div>
                   


                <div>
                    <h1 className='auth-title'>Register</h1>
                </div>


                
                <div>
                    <button className = "butt-google" onClick={handleGoogleLogin}>Google Sign-up</button>
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
                        <button classNatype='submit'> Submit</button>
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