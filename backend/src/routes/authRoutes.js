const express = require('express');

const {
    registerUser,
    loginUser
} = require('../controller/authController.js');

const router = express.Router();

// Routes
router
    .post('/register', registerUser)
    .post('/login', loginUser);

module.exports = router;
