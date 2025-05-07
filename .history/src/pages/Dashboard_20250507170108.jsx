import React, { useEffect } from 'react';
import { auth } from '../firebase/firebaseAuth.js';

const Dashboard = () => {
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                // Get the current user's ID token
                const token = await auth.currentUser?.getIdToken();
                
                if (!token) {
                    console.error('No token available');
                    return;
                }

                // Make request to protected route
                const response = await fetch('http://localhost:5000/auth/protected', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                console.log('Protected route response:', data);
            } catch (error) {
                console.error('Error fetching protected data:', error);
            }
        };

        fetchProtectedData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Add your dashboard content here */}
        </div>
    );
};

export default Dashboard;
