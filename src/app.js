const express = require('express');
const path = require('path');
const emailRoutes = require('./routes/email.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', emailRoutes);

module.exports = app;