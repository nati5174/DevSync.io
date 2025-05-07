import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Store the token in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            console.log('User logged in successfully:', data.user);
            navigate('/dashboard'); // Redirect to dashboard or home page
        } catch (error) {
            console.error("Error logging in:", error);
            alert(error.message);
        }
    };

    return (
        <div className="auth-container">
            <div className='header-auth'>
                <a>
                    <img className='logo' src='/coding.png' alt="Code logo" width={70}/>
                </a>
                <h2 className='brand-name'> DevSync </h2>
            </div>

            <div className='login'>
                <div>
                    <h1 className='auth-title'>Login</h1>
                </div>

                <form onSubmit={handleLogin}>
                    <div>
                        <input 
                            placeholder='Email' 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <input 
                            placeholder='Password' 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button className="submit" type='submit'>Login</button>
                    </div>
                </form>

                <div className='footer'>
                    <Link className="sender" to="/register">Don't have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;