const express = require('express');
const router = express.Router();

const { AuthController } = require('../controllers');

// AUTHENTICATION ROUTES
// Register
router.post('/register', AuthController.register);

// Login
router.post('/login', AuthController.login);

// Logout
router.post('/logout', AuthController.logout);

module.exports = router;
