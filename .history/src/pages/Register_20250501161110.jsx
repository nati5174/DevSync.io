import React from "react";
import { Link } from "react-router-dom";
import '../styles/auth.css'
import {signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import {auth, provider_google, provider_git } from "../firebase/firebase.js"
    


const Register = () => {


    const []

    const handleGoogleLogin = async () => {

        try{
            const result = await signInWithPopup(auth, provider_google)
            console.log(result.user);

        }

        catch (Error){
            console.log("Error signinh up with Google", Error)

        }



    }

    const handleGitLogin = async () => {

        try{
            const result = await signInWithPopup(auth, provider_git)
            console.log(result.user)
        }

        catch (error){
            console.log('Error logging in with Github', Error)
        }

        
    }

    const handleSignUp = await () => {

        try{


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
                        <input type='email'/>
                    </div>


                    <div>
                        <h4>Password</h4>
                    </div>
                    <div>
                        <input type='password'/>
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