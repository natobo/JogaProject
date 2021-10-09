const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An user must have a name'],
  },
  username: {
    type: String,
    required: [true, 'An user must have a username'],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'An user must have a email'],
    validate: [validator.isEmail, 'Must provide a valid email'],
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
  avatarUrl: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'An user must have a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Confirm the password'],
    minlength: 8,
    validate: {
      validator(el) {
        return el === this.password;
      },
      message: 'Password are not the same!',
    },
    select: false,
  },
  bio: {
    type: String,
  },
  bannerImgLink: {
    data: Buffer,
    contentType: String,
  },
  avgPunctuation: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  // Relationships
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  lfgs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LFG' }],
  dashboards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dashboard' }],
  myReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
  invites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invite' }],
});

usersSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

usersSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  const ans = await bcrypt.compare(candidatePassword, userPassword);
  return ans;
};

usersSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt)
    return JWTTimestamp < parseInt(this.passwordChangedAt.getTime() / 1000, 10);
  return false;
};

usersSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model('User', usersSchema);
