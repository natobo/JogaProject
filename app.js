const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user-router');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(cookieParser());
//  Middlewares to establish the value of req.body:
app.use(express.json()); //  For data type application/json
app.use(express.urlencoded({ extended: false })); // For data type application/x-www-form-urlencoded

// This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// Here we put our routers
usersRouter(app);

module.exports = app;
