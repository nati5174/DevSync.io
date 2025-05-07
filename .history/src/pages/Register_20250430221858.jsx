import React from "react";
import { Link } from "react-router-dom";
import '../styles/auth.css'
import { signInWithGooglePopup } from "../firebase/firebase.js"
    


const Register = () => {

    const handleGoogleSignIn = async () => {
        try {
          const userCredential = await signInWithGooglePopup();
          const user = userCredential.user;
          console.log('Signed in as:', user.displayName);
        } catch (error) {
          console.error('Error signing in with Google:', error.message);
        }
      };


    return(
        <div className="auth-container">
            <div className='register'>
                <div>
                    <h1 className='auth-title'>Register</h1>
                </div>

                <form>

                <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>




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