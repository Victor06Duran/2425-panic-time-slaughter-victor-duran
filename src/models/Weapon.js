const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({

  _id: { type: 'ObjectId' },
  name: { type: 'String' },
  description: { type: 'String' },
  num_die_damage: { type: 'Number' },
  type: { type: 'String' },
  quality: { type: 'Number' },

});

const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;