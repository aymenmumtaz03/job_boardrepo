const jwt = require('jsonwebtoken');
require('dotenv').config;

const authenticate = (req, res, next) => {
  const header = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET_KEY;
  console.log(secretKey);

  if (header) {
    const token = header.split(' ')[1];
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid Token' });
    }
  } else {
    return res.status(401).json({ error: 'No Token Provided' });
  }
};


module.exports = authenticate;
