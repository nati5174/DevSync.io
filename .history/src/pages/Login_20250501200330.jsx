import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/auth.css'
import {handleGitLogin, handleGitLogin} from './Register.jsx'

import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase/firebase.js"
    


const Login = () => {


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
            navigate('/');

        }

        catch (error){
            console.log('Error logging in with Github', Error)
        }

        
    }



    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            console.log('Attempting to find user with email:', email);
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log('User created successfully:', result.user);
            navigate('/');
        } catch (error) {
            console.error("Error finding User:", error);
            // You can add error state and display it to the user
            alert(error.message); // Simple error feedback
        }
    }

    return(
        <div className="auth-container">
            <div className='register'>


                <div className='header-auth'>
                    <a>
                        <img className = 'logo'src='/coding.png' alt="Code logo" width={70}/>
                    </a>
                    <h2 className='brand-name'> DevSync </h2>
                </div>
                   


                <div>
                    <h1 className='auth-title'>Login</h1>
                </div>


                <form onSubmit={handleSignIn}>

                    
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
                    <button className = "butt-auth" onClick={handleGoogleLogin}> 
                        
                        <div>
                                <a>
                                    <img src='/google.png' width={20} />
                                </a>

                            </div>
                            
                            <span>Sign-in with Google</span>
                        
                    </button>
                </div>

                <div>
                    <button className='butt-auth'onClick={handleGitLogin}> 
                        <div>
                            <a>
                                <img src='/github.png' width={20}/>
                            </a>

                        </div>
                        
                        <span>Sign-in with Github</span>
                        </button>
                </div>
                

                <div className='footer'>
                    <Link className="sender" to="/login">Already have an account?</Link>
                </div>



            </div>
        </div>
    )
}

export default Login