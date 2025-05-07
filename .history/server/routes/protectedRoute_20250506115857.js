const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth');

// Protected route example
router.get('/protected', authenticateUser, (req, res) => {
  // req.user contains the decoded token information
  res.json({ 
    message: 'This is a protected route',
    user: req.user 
  });
});

module.exports = router; 