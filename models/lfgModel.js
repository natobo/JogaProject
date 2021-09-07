const mongoose = require('mongoose');

const lfgSchema = mongoose.Schema({
  region: {
    type: String,
    enum: ['LATAM', 'EUROPE', 'NORTHAMERICA', 'ASIA', 'OCEANIA', 'AFRICA'],
    default: 'LATAM',
  },
  comment: {
    type: String,
  },
  authorUsername: {
    type: String,
    required: [true, 'Author is required to create the LFG'],
  },
  createdAt: {
    type: Date,
    required: [true, 'Creation date is required to create the LFG'],
  },
  expiresAt: {
    type: Date,
    required: [true, 'Expiry date is required to create the LFG'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required to create the LFG'],
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  },
});

module.exports = mongoose.model('LFG', lfgSchema);
