const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A game must have a name'],
  },
  platform: {
    type: [
      {
        type: String,
        enum: ['PC', 'PLAYSTATION', 'NINTENDO', 'XBOX'],
      },
    ],
    validate: {
      validator(el) {
        return el.length > 0 && el.length < 5;
      },
      message: 'A game must have at least 1 platform!',
    },
  },
  linkImg: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
  type: {
    type: String,
    uppercase: true,
    enum: [
      'ACCION',
      'ROL',
      'ESTRATEGIA',
      'AVENTURA Y CASUAL',
      'SIMULACION',
      'DEPORTES Y CARRERAS',
    ],
    default: 'AVENTURA Y CASUAL',
  },
  description: {
    type: String,
    required: [true, 'A game must have a description'],
  },
  linkPortada: {
    type: String,
  },
  tags: {
    type: [String],
    default: ['none'],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  numberOfReviews: {
    type: Number,
    min: 0,
    default: 0,
  },
});

module.exports = mongoose.model('Game', gamesSchema);
