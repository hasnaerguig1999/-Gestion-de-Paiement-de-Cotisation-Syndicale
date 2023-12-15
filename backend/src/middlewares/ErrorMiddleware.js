const mongoose = require("mongoose");
const Error = mongoose.Error;
const notFound = async (req, res, next) => {
  const error = new Error(`Not Found ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof Error.ValidationError) {
    return res.status(400).json({ success: false, message: err.message });
  } else if (err instanceof Error.CastError) {
    return res.status(400).json({ success: false, message: 'Invalid ID' });
  } else {
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }

};

module.exports = { notFound, errorHandler };
