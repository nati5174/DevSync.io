import jwt from 'jsonwebtoken';

// In a production environment, this should be stored in environment variables
const JWT_SECRET = 'your-secret-key'; // Replace with a secure secret key

export const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.uid,
            email: user.email,
        },
        JWT_SECRET,
        { expiresIn: '24h' }
    );
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export const decodeToken = (token) => {
    try {
        return jwt.decode(token);
    } catch (error) {
        throw new Error('Invalid token');
    }
}; 