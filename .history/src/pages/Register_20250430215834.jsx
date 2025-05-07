import React from "react";
import { Link } from "react-router-dom";
import '../styles/auth.css'

const Register = () => {
    return(
        <div className="auth-container">
            <div className='register'>
                <div>
                    <h1>Register</h1>
                </div>

                <form>
                    <div>
                        <h4>Email</h4>
                    </div>
                    <div>
                        <input/>
                    </div>


                    <div>
                        <h4>Password</h4>
                    </div>
                    <div>
                        <input type='/>
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