const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required to create the chat'],
  },
  lastMessageID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  Icon: {
    data: Buffer,
    contentType: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'user is required to create the chat'],
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

module.exports = mongoose.model('Chat', chatSchema);
