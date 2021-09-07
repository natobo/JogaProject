const Ranking = require('../models/rankingModel');
const factory = require('./handlerFactory');

exports.getRanking = factory.getOne(Ranking);
exports.getAllRankings = factory.getAll(Ranking);
exports.createRanking = factory.createOne(Ranking);
exports.updateRanking = factory.updateOne(Ranking);
exports.deleteRanking = factory.deleteOne(Ranking);
