import React from "react";
import { Link } from "react-router-dom";
import '../styles/auth.css'
import { signInWithGooglePopup } from "../firebase/firebase.js"


    const logGoogleUser = async () => {
            const response = await signInWithGooglePopup();
            console.log(response);
        }
       




const Register = () => {
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
            

                    <div>
                         <Link to="/login">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register