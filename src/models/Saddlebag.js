const mongoose = require('mongoose');

const saddlebagSchema = new mongoose.Schema({

  _id: { type: 'ObjectId' },
  name: { type: 'String' },
  description: { type: 'String' },
  recover_stamina: { type: 'Number' }
});

const Saddlebag = mongoose.model('Saddlebag', saddlebagSchema);

module.exports = Saddlebag;