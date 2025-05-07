import admin from '../firebase/firebaseAdmin.js';

export const firebaseAuthMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No token provided in header');
        return res.status(401).json({ error: 'Unauthorized - No token provided' });
    }

    const idToken = authHeader.split('Bearer ')[1];
    console.log('Received token:', idToken.substring(0, 20) + '...');

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        console.log('Token verification successful');
        console.log('Decoded token:', decodedToken);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(401).json({ 
            message: 'Unauthorized: Invalid token',
            error: error.message 
        });
    }
};