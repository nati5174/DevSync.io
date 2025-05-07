import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/auth.css'

import {signInWithPopup, signInWithEmailAndPassword} from "firebase/auth"
import {auth, provider_google, provider_git } from "../firebase/firebase.js"
    


const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();



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
                            
                            <span>Sign-up with Google</span>
                        
                    </button>
                </div>

                <div>
                    <button className='butt-auth'onClick={handleGitLogin}> 
                        <div>
                            <a>
                                <img src='/github.png' width={20}/>
                            </a>

                        </div>
                        
                        <span>Sign-up with Github</span>
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