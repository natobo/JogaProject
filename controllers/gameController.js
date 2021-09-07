const Game = require('../models/gameModel');
const factory = require('./handlerFactory');

exports.getGame = factory.getOne(Game);
exports.getAllGames = factory.getAll(Game);
exports.createGame = factory.createOne(Game);
exports.updateGame = factory.updateOne(Game);
exports.deleteGame = factory.deleteOne(Game);
