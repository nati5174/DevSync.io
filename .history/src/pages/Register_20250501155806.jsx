import React from "react";
import { Link } from "react-router-dom";
import '../styles/auth.css'
import signInWithPopup from "firebase/auth"
import {auth, provider_google, provider_git } from "../firebase/firebase.js"
    


const Register = () => {

    const handleGoogleLogin = async () => {

        try{
            const result = await signInWithPopup(auth, provider_google)

        }

        catch (Error){

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


 
      

    return(
        <div className="auth-container">
            <div className='register'>
                <div>
                    <h1 className='auth-title'>Register</h1>
                </div>
                


                <form>

              



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
                        <button> Submit</button>
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