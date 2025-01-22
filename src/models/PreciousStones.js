const mongoose = require('mongoose');

const preciousStoneSchema = new mongoose.Schema({

  _id: { type: 'ObjectId' },
  name: { type: 'String' },
  description: { type: 'String' },
  value: { type: 'Number' }
});

const PreciousStone = mongoose.model('PreciousStone', preciousStoneSchema);

module.exports = PreciousStone;