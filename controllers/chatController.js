const Chat = require('../models/chatModel');
const factory = require('./handlerFactory');

exports.getChat = factory.getOne(Chat);
exports.getAllChats = factory.getAll(Chat);
exports.createChat = factory.createOne(Chat);
exports.updateChat = factory.updateOne(Chat);
exports.deleteChat = factory.deleteOne(Chat);
