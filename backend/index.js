const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/routes/authRoutes.js');
const protectedRoutes = require('./src/routes/protected.js');

const app = express();

app.use(cors({
    origin: '*',
    credentials: true // if you're using cookies/auth headers
}));

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
    })
    .catch(err => console.error('Connection error:', err));

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})
