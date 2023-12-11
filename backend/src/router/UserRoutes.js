const express = require('express');
const { login, register } = require('../controllers/UserController');

const Authrouter = express.Router();

Authrouter.post('/login', login);
Authrouter.post('/register', register);


module.exports = Authrouter;

