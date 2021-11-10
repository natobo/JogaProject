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
});

module.exports = mongoose.model('Game', gamesSchema);
