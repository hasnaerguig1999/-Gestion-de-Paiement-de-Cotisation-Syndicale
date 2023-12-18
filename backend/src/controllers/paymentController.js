const Payment = require('../models/Payment');

// @Method POST
const createPayment = async (req, res) => {
  const { apartmentId, month } = req.body;

  try {
    const payment = new Payment({
      apartmentId,
      month
    });

    await payment.save();

    res.status(201).json({
      success: true,
      data: payment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
const getAllPayments = async (req, res) => {
    try {
      const payments = await Payment.find({}).populate('apartmentId');
      res.status(200).json({
        success: true,
        data: payments
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  };



module.exports = {
  createPayment,getAllPayments
};

