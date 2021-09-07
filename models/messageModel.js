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
});

module.exports = mongoose.model('Message', messageSchema);
