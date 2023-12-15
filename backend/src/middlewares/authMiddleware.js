const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication failed. Token not provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Authentication failed. Invalid token.' });
  }
};

module.exports = authMiddleware;
