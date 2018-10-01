const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studySchema = new Schema({
  code: { required: true, type: String, unique: true, uppercase: true, trim: true, minlength: 5, maxlength: 12 }, // код исследования
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },         // заказчик исследования
  test_object: { type: Schema.Types.ObjectId, ref: 'Test_Object' },

  date_created: { required: true, type: Date, default: Date.now },    // дата создания документа
  date_updated: { required: false, type: Date, default: Date.now },   // дата последнего изменения документа
  enabled: { required: true, type: Boolean}
});

studySchema.pre('findOneAndUpdate', function(next) {
  this._update.date_updated = Date.now();
  next();
});

module.exports = mongoose.model('Study', studySchema);