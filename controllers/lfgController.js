const LFG = require('../models/lfgModel');
const factory = require('./handlerFactory');

exports.getLFG = factory.getOne(LFG);
exports.getAllLFGs = factory.getAll(LFG);
exports.createLFG = factory.createOne(LFG);
exports.updateLFG = factory.updateOne(LFG);
exports.deleteLFG = factory.deleteOne(LFG);
