const express = require('express');
const auth = require('../middleware/auth.js');


const router = express.Router();

router.get('/protected', auth, (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.userId });
});

module.exports = router;