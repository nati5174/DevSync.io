import admin from '../firebase/firebaseAdmin.js';

export const firebaseAuthMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if ( !authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({error: 'Unauthorized - No token provided'})
    }

    const idToken = authHeader.split('Bearer ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};