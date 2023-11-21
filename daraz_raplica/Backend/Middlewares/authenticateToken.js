import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    console.log("functioncall");
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
