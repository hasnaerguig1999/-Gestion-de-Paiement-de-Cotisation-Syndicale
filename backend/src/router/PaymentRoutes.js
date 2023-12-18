const express = require('express');
const {  createPayment,  getAllPayments  } = require('../controllers/paymentController');

const Paymentrouter = express.Router();


Paymentrouter.post('/', createPayment);
Paymentrouter.get('/', getAllPayments);





module.exports = Paymentrouter;


