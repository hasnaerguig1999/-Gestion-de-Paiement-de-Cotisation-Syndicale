import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; 
    }
  }
}






const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication failed. Token not provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // Attach the user information to the request
    req.user = decoded;
    console.log(decoded)
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Authentication failed. Invalid token.' });
  }
};

export default authMiddleware;
