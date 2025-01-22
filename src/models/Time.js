const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({

  _id: { type: 'ObjectId' },
  day_number: { type: 'Number' },
  day_week: { type: 'String' },
  km_traveled: { type: 'Number' },
  km_total: { type: 'Number' }

});

const Time = mongoose.model('Time', timeSchema);

module.exports = Time;