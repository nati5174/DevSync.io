import { auth } from '../firebase/firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged
} from 'firebase/auth';

class AuthService {
    constructor() {
        this.auth = auth;
        this.user = null;
        this.token = null;
    }

    // Initialize auth state listener
    initAuthListener(callback) {
        return onAuthStateChanged(this.auth, async (user) => {
            this.user = user;
            if (user) {
                // Get the ID token
                this.token = await user.getIdToken();
            } else {
                this.token = null;
            }
            if (callback) callback(user);
        });
    }

    // Sign in with email and password
    async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            this.user = userCredential.user;
            // Get fresh token
            this.token = await userCredential.user.getIdToken();
            return {
                user: this.user,
                token: this.token
            };
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    // Register new user
    async register(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            this.user = userCredential.user;
            // Get fresh token
            this.token = await userCredential.user.getIdToken();
            return {
                user: this.user,
                token: this.token
            };
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    // Sign out
    async logout() {
        try {
            await signOut(this.auth);
            this.user = null;
            this.token = null;
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    // Reset password
    async resetPassword(email) {
        try {
            await sendPasswordResetEmail(this.auth, email);
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    // Get current user
    getCurrentUser() {
        return this.user;
    }

    // Get current token
    async getToken() {
        if (this.user) {
            // Force refresh to ensure token is always valid
            this.token = await this.user.getIdToken(true);
            return this.token;
        }
        return null;
    }

    // Handle authentication errors
    handleAuthError(error) {
        let message = 'An error occurred during authentication';
        
        switch (error.code) {
            case 'auth/user-not-found':
                message = 'User not found';
                break;
            case 'auth/wrong-password':
                message = 'Invalid password';
                break;
            case 'auth/email-already-in-use':
                message = 'Email is already registered';
                break;
            case 'auth/weak-password':
                message = 'Password is too weak';
                break;
            case 'auth/invalid-email':
                message = 'Invalid email address';
                break;
            default:
                message = error.message;
        }

        return {
            code: error.code,
            message: message
        };
    }
}

// Create a singleton instance
const authService = new AuthService();
export default authService; 