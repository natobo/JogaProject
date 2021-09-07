const mongoose = require('mongoose');

const inviteSchema = mongoose.Schema({
  description: String,
  status: {
    type: String,
    enum: ['ACCEPTED', 'REJECTED', 'PENDING'],
    default: 'PENDING',
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

module.exports = mongoose.model('Invite', inviteSchema);
