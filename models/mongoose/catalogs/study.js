const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// модель счетчика для генерации порядкового номера
const CounterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});

var counter = mongoose.model('counter', CounterSchema);


const studySchema = new Schema({
  studyNo: { required: true, type: String, unique: true, uppercase: true, trim: true, minlength: 5, maxlength: 12 }, // код исследования
  planYear: { required: true, type: Number, min: 2015, max: 2050 },     // планируемый год
  sequenceNumber: { type: Number, dafault: 0, min: 1, max: 100 },    // порядковый номер исследования
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },         // заказчик исследования
  test_object: { type: Schema.Types.ObjectId, ref: 'Test_Object' },   // тестируемые объекты

  date_created: { required: true, type: Date, default: Date.now },    // дата создания документа
  date_updated: { required: false, type: Date, default: Date.now },   // дата последнего изменения документа
  enabled: { required: true, type: Boolean }
});

studySchema.pre('findOneAndUpdate', function (next) {
  this._update.date_updated = Date.now();
  next();
});

studySchema.pre('save', function (next) {
  var doc = this;
  counter.findByIdAndUpdate({ _id: 'studyId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
    .then(function (count) {
      doc.sequenceNumber = count.seq;
      next();
    })
    .catch(function (error) {
      return next(error);
    });
});

module.exports = mongoose.model('Study', studySchema);