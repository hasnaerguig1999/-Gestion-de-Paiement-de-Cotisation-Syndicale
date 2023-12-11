const asyncHandler = require('express-async-handler');
const { Request, Response } = require('express');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @Desc Login
// @Route /api/auth/login
// @Method POST
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (await user.comparePassword(password)) {
    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role, // Include the role in the response
        token: generateToken(user._id)
      }
    });
  } else {
    res.status(401);
    throw new Error("Email or password incorrect");
  }
});

// @Desc Register
// @Route /api/auth/register
// @Method POST
const register = asyncHandler(async (req, res) => {
  const { email, name, password, role } = req.body;

  const user = new User({
    email,
    name,
    password,
    role: role || 'user' 
  });

  await user.save();

  res.status(201).json({
    success: true,
    user: {
      email: user.email,
      name: user.name,
      role: user.role // Include the role in the response
    }
  });
});

module.exports = { login, register };
