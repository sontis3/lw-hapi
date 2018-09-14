const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { required: true, type: String, unique: true },
  date_created: { required: false, type: Date, default: Date.now },
  date_updated: { required: false, type: Date, default: Date.now },
  enabled: { required: true, type: Boolean}
});

module.exports = mongoose.model('Customer', customerSchema);