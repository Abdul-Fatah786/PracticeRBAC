const express = require('express');

const {
    userRegister,
    userLogin
} = require('../controller/authController.js');

const router = express.Router();

// Routes
router.post('/register', userRegister)
router.post('/login', userLogin)

module.exports = router;