const Invite = require('../models/inviteModel');
const factory = require('./handlerFactory');

exports.getInvite = factory.getOne(Invite);
exports.getAllInvites = factory.getAll(Invite);
exports.createInvite = factory.createOne(Invite);
exports.updateInvite = factory.updateOne(Invite);
exports.deleteInvite = factory.deleteOne(Invite);
