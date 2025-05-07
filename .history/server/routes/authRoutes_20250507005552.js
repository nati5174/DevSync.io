import express from 'express';
import { firebaseAuthMiddleware } from '../middleware/auth.js';
import { protectedRoute } from '../controllers/authController.js';

const router = express.Router();

router.post('/protected', firebaseAuthMiddleware, protectedRoute);

export default router;