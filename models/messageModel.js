const mongoose = require('mongoose');
const validator = require('validator');

const messageSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    required: [true, 'timestamp is required to create the message'],
    validator: [validator.isDate, 'Must provide a valid Date'],
  },
  content: {
    type: String,
    required: [true, 'content is required to create the message'],
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: [true, 'chat is required to create the message'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'user is required to create the message'],
  },
});

module.exports = mongoose.model('Message', messageSchema);
