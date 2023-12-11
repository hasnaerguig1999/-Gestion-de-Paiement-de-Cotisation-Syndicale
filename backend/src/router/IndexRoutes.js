const express = require('express');
const Authrouter = require('./UserRoutes');
const Apartementrouter = require('./ApartementRouter')

const router = express.Router();
router.use('/auth', Authrouter);
router.use('/apartement', Apartementrouter);

module.exports = router;
