const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const routes = require('./routes');
app.use(routes);

module.exports = app;
