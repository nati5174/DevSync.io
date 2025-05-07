const admin = require('../firebase/firebaseAdmin')

const authenticateFirebaseToken = async (req, res, next) => {
    try {
        // Check if authorization header exists
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                error: 'Unauthorized',
                message: 'No token provided'
            });
        }

        // Extract the token
        const idToken = authHeader.split('Bearer ')[1];

        // Verify the Firebase token
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        
        // Add user information to the request
        req.user = {
            uid: decodedToken.uid,
            email: decodedToken.email,
            emailVerified: decodedToken.email_verified,
            role: decodedToken.role || 'user',
            // Add any custom claims that might be present
            claims: decodedToken
        };

        // Token is valid, proceed to the next middleware
        next();
    } catch (error) {
        console.error('Authentication Error:', error);
        
        // Handle different types of authentication errors
        if (error.code === 'auth/id-token-expired') {
            return res.status(401).json({ 
                error: 'Unauthorized',
                message: 'Token has expired'
            });
        }
        
        if (error.code === 'auth/id-token-revoked') {
            return res.status(401).json({ 
                error: 'Unauthorized',
                message: 'Token has been revoked'
            });
        }

        return res.status(401).json({ 
            error: 'Unauthorized',
            message: 'Invalid authentication token'
        });
    }
};

// Middleware to check if user has admin role
const requireAdmin = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ 
            error: 'Unauthorized',
            message: 'Authentication required'
        });
    }

    try {
        const user = await admin.auth().getUser(req.user.uid);
        const customClaims = user.customClaims || {};
        
        if (customClaims.admin) {
            next();
        } else {
            return res.status(403).json({ 
                error: 'Forbidden',
                message: 'Admin access required'
            });
        }
    } catch (error) {
        console.error('Admin verification error:', error);
        return res.status(500).json({ 
            error: 'Internal Server Error',
            message: 'Error verifying admin status'
        });
    }
};

module.exports = {
    authenticateFirebaseToken,
    requireAdmin
};