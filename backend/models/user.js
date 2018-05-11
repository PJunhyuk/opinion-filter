var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  phone_number: String,
  create_date: { type: Date, default: Date.now },
  status: Number
});

module.exports = mongoose.model('user', userSchema);
