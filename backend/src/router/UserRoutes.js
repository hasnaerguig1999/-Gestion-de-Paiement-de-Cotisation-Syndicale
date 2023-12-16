const express = require('express');
const { login, register,getAllUsers } = require('../controllers/UserController');

const Authrouter = express.Router();

Authrouter.post('/login', login);
Authrouter.post('/register', register);
Authrouter.get('/', getAllUsers);


module.exports = Authrouter;

