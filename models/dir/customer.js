const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { required: true, type: String, unique: true },
  dateCreated: { required: false, type: Date, default: Date.now },
  dateUpdated: { required: false, type: Date, default: Date.now },
  active: { required: true, type: Boolean}
});

module.exports = mongoose.model('Customer', customerSchema);