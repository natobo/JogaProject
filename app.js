const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user-router');
const dashboardRouter = require('./routes/dashboard-router');
const reviewsRouter = require('./routes/review-router');
const invitesRouter = require('./routes/invite-router');
const gameRouter = require('./routes/game-router');
const partyRouter = require('./routes/party-router');
const lfgsRouter = require('./routes/lfg-router');
const rankingsRouter = require('./routes/ranking-router');
const chatRouter = require('./routes/chat-router');
const messageRouter = require('./routes/message-router');

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
// Here we put our routers and the directions of the path to be called
app.use('/api/user', usersRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/review', reviewsRouter);
app.use('/api/invite', invitesRouter);
app.use('/api/game', gameRouter);
app.use('/api/party', partyRouter);
app.use('/api/lfg', lfgsRouter);
app.use('/api/ranking', rankingsRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);

module.exports = app;
