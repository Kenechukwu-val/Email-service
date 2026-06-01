const express = require('express');
const emailRoutes = require('./routes/email.js');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use email routes
app.use('/api', emailRoutes);

module.exports = app;