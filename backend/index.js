const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/routes/AuthRoutes.js');
const protectedRoutes = require('./src/routes/protected.js');

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend API!' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(err => console.error('Connection error:', err));
