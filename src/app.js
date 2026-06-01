const express = require('express');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use email routes
app.use('/api/emails', emailRoutes);

module.exports = app;