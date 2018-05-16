var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  phone_number: String,
  create_date: { type: Date, default: Date.now },
  status: { type: Number, default: 1 },
  q_1: { type: String, default: '0' },
  q_2: { type: String, default: '0' },
  q_3: { type: String, default: '0' }
});

module.exports = mongoose.model('user', userSchema);
