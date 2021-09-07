const mongoose = require('mongoose');

const rankingSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required to create the ranking'],
  },
  description: {
    type: String,
  },
  lfg: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LFG',
    required: [true, 'Lfg is required to create the ranking'],
  },
});

module.exports = mongoose.model('Ranking', rankingSchema);
