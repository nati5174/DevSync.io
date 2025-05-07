import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/auth.css'

import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import {auth, provider_google, provider_git } from "../firebase/firebaseAuth.js"
    


const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const checkProtectedRoute = async (user) => {
        try {
            const token = await user.getIdToken();
            console.log('Got token:', token);
            
            // Add a small delay to ensure token propagation
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const response = await fetch('http://localhost:5000/auth/protected', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || errorData.message}`);
            }
            
            const data = await response.json();
            console.log('Protected route response:', data);
        } catch (error) {
            console.error('Error checking protected route:', error);
        }
    };
    
    const handleGoogleLogin = async () => {
        try {
            provider_google.setCustomParameters({
                prompt: 'select_account'
            });

            const result = await signInWithPopup(auth, provider_google)
            console.log(result.user);
            await checkProtectedRoute(result.user);
            navigate('/dashboard');
        } catch (Error) {
            console.log("Error signing up with Google", Error)
        }
    }

    const handleGitLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider_git)
            console.log(result.user)
            await checkProtectedRoute(result.user);
            navigate('/dashboard');
        } catch (error) {
            console.log('Error logging in with Github', Error)
        }
    }



    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            console.log('Attempting to find user with email:', email);
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log('User created successfully:', result.user);
            await checkProtectedRoute(result.user);
            navigate('/dashboard');
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
                    <Link className="sender" to="/register">Don't have an account?</Link>
                </div>



            </div>
        </div>
    )
}

export default Login