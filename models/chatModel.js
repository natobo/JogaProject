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
  Icon: {
    type: String,
    required: [true, 'icon is required to create the chat'],
    validator: [validator.isURL, 'Must provide a valid URL'],
  },
});

module.exports = mongoose.model('Chat', chatSchema);
