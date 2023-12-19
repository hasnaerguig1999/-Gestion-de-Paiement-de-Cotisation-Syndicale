const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApartmentSchema = new Schema({
  client: {
    type: String,
    unique: true,
    required: [true, "Client is required"],
    minlength: [4, "Must be at least 4"],
    maxlength: [30, "Must be at less than 30"],
    trim: true,
  },
  number: {
    type: String,
    required: [true, "Number is required"],
  },
  status: {
    type: Boolean,
    default: false,
    trim: true,
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  paidMonths: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Apartment", ApartmentSchema);
