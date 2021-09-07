const Message = require('../models/messageModel');
const factory = require('./handlerFactory');

exports.getMessage = factory.getOne(Message);
exports.getAllMessages = factory.getAll(Message);
exports.createMessage = factory.createOne(Message);
exports.updateMessage = factory.updateOne(Message);
exports.deleteMessage = factory.deleteOne(Message);
