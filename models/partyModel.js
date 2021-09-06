const mongoose = require('mongoose');
const validator = require('validator');

const partySchema = mongoose.Schema({
  idJitsiMeet: {
    type: String,
    required: [true, 'idJitsiMeet is required to create the party'],
    validator: [validator.isURL, 'Must provide a valid URL'],
  },
});

module.exports = mongoose.model('Party', partySchema);
