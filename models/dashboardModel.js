const mongoose = require('mongoose');
const userModel = require('./userModel');

const dashboardSchema = mongoose.Schema({
  theme: {
    type: String,
    enum: ['dark', 'light', 'blue', 'red'],
    default: 'dark',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required to create the dashboard'],
  },
  filters: [{ filter: String }],
  // Relationships
  rankings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ranking' }],
  party: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Party' }],
  lfgs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LFG' }],
});

module.exports = mongoose.model('Dashboard', dashboardSchema);
