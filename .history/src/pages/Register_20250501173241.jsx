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
                    <button className = "butt-auth" onClick={handleGoogleLogin}> 
                        
                        <div>
                                <a>
                                    <img src='/google.png' width={30} />
                                </a>

                            </div>
                            
                            <span>Sign-up with Google</span>
                        
                    </button>
                </div>

                <div>
                    <button className='butt-auth'onClick={handleGitLogin}> 
                        <div>
                            <a>
                                <img src='/github.png' width={30}/>
                            </a>

                        </div>
                        
                        <span>Sign-up with Github</span>
                        </button>
                </div>
                




                <form onSubmit={handleSignUp}>

                    
                    <div>
                        <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>


                   
                    <div>
                        <input placeholder = 'Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div>
                        <button className="submit"type='submit'> Submit</button>
                    </div>
                   
                </form>

                <div>
                    <Link className = "sender"to="/login">Already have an account?</Link>
            </div>

                





            </div>
        </div>
    )
}

export default Register