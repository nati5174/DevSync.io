const express = require("express")
const router = express.Router
const firebaseAuthMiddleware = require('../middleware/auth')
const protectedRoute = require('../controllers/authController')

router.post('/protected', firebaseAuthMiddleware, protectedRoute)

module.exports = authRoutes