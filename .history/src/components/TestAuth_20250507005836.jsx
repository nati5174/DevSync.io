import React, { useState } from 'react';

const TestAuth = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const testProtectedRoute = async () => {
        try {
            const idToken = localStorage.getItem('idToken');
            if (!idToken) {
                setError('No ID token found. Please log in first.');
                return;
            }

            const response = await fetch('http://localhost:5000/auth/protected', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            setResponse(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResponse(null);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Test JWT Authentication</h2>
            <button onClick={testProtectedRoute}>Test Protected Route</button>
            
            {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    Error: {error}
                </div>
            )}
            
            {response && (
                <div style={{ marginTop: '10px' }}>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TestAuth; 