const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({

  _id: { type: 'ObjectId' },
  name: { type: 'String' },
  occupation: { type: 'String' },
  description: { type: 'String' },

  stats: {
    strength: { type: 'Number' },
    dexterity: { type: 'Number' },
    stamina: { type: 'Number' }
  },

  equipment: {
    saddlebag: [{ type: 'String' }],
    weapons: [{ type: 'String' }],
    quiver: { type: 'Number' },
    pouch: {
      coins: { type: 'Number' },
      gold: { type: 'Number' },
      precious_stones: [{ type: 'String' }]
    },
    miscellaneous: []

  },

});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;