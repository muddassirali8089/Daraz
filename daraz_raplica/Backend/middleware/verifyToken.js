import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Store the decoded token payload (userId, email) in req.user
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default verifyToken;
