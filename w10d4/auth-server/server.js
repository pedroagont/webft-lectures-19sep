// ----------------------- REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');

// ----------------------- SETUP AND MIDDLEWARES
const app = express();
const port = 3000;

app.use(helmet()); // includes security headers (owasp)
app.use(morgan('dev')); // middleware that logs all the requests
app.use(express.json()); // allow requests to include json body
app.use(
  cookieSession({
    name: 'session',
    keys: ['mySecretKey1', 'mySuperSecretKey2'],

    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
    maxAge: 10 * 60 * 1000 // 10 min
  })
);

// ----------------------- ROUTES / ENDPOINTS
const routes = require('./routes');
app.use(routes);

module.exports = app;
