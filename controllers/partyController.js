const Party = require('../models/partyModel');
const factory = require('./handlerFactory');

exports.getParty = factory.getOne(Party);
exports.getAllPartys = factory.getAll(Party);
exports.createParty = factory.createOne(Party);
exports.updateParty = factory.updateOne(Party);
exports.deleteParty = factory.deleteOne(Party);
