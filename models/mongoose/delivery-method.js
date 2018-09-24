const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliveryMethodSchema = new Schema({
  name: { required: true, type: String, unique: true },
  date_created: { required: false, type: Date, default: Date.now },
  date_updated: { required: false, type: Date, default: Date.now },
  enabled: { required: true, type: Boolean}
});

deliveryMethodSchema.pre('findOneAndUpdate', function(next) {
  this._update.date_updated = Date.now();
  next();
});

module.exports = mongoose.model('Delivery_Method', deliveryMethodSchema);