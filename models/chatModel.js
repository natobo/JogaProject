const mongoose = require('mongoose');
const validator = require('validator');

const chatSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'nombre is required to create the chat'],
  },
  lastMessageID: {
    type: String,
    required: [true, 'lastMessageID is required to create the chat'],
  },
  icon: {
    type: String,
    required: [true, 'icon is required to create the chat'],
  },
});

module.exports = mongoose.model('Chat', chatSchema);
