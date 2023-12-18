const express = require('express');
const Authrouter = require('./UserRoutes');
const Apartementrouter = require('./ApartementRouter')
const Paymentrouter = require('./PaymentRoutes')

const router = express.Router();
router.use('/auth', Authrouter);
router.use('/apartement', Apartementrouter);
router.use('/payment', Paymentrouter);

module.exports = router;
