// Initial librarys of the project
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Middlewares for security
const rateLimit = require('express-rate-limit');
const cors = require('cors'); // Enable CORS (Cross-origin resource sharing) in routes or in our app.
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Imports for the app
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

// Create the app
const app = express();

// MIDDLEWARES
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(logger('dev'));
app.use(cookieParser());
app.use(mongoSanitize({ replaceWith: '_' }));
app.use(xss());
app.use(hpp());
app.use(express.json()); //  value req.json for data type application/json
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
const limiter = rateLimit({
  max: 100, // limit each IP to 100 requests per windowMs
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// ROUTES
// This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static(path.join(__dirname, 'front-noframework')));
app.use('/', indexRouter);
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
