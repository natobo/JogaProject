const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user-router');
const dashboardRouter = require('./routes/dashboard-router');
const reviewsRouter = require('./routes/review-router');
const invitesRouter = require('./routes/invite-router');
const lfgsRouter = require('./routes/lfg-router');
const rankingsRouter = require('./routes/ranking-router');

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
dashboardRouter(app);
reviewsRouter(app);
invitesRouter(app);
lfgsRouter(app);
rankingsRouter(app);

module.exports = app;
