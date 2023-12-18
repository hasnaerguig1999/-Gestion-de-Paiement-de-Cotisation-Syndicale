const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  apartmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apartment',
    required: true
  },
  month: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model('Payment', PaymentSchema);