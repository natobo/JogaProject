const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  description: String,
  punctuation: {
    type: Number,
    required: [true, 'Punctuation is required to create the review'],
  },
  comment: {
    type: String,
  },
  pros: [{ type: String }],
  cons: [{ type: String }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required to create the review'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required to create the review'],
  },
});

module.exports = mongoose.model('Review', reviewSchema);
