// This file begins the routing for API endpoints. This file is easily scalable.

const express = require('express');

const notesRouter = require('./notes');

const app = express(); 

// This leads us to the /api/notes endpoints
app.use('/notes', notesRouter);

module.exports = app;
