const mongoose = require('mongoose');

const inviteSchema = mongoose.Schema({
  description: String,
  status: {
    type: String,
    enum: ['accepted', 'rejected', 'pending'],
    default: 'pending',
  },
  createdAt: Date,
  completeddAt: Date,
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Sender is required to create the Invite'],
  },
  reciver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Reciver is required to create the Invite'],
  },
});

module.exports = mongoose.model('invite', inviteSchema);
