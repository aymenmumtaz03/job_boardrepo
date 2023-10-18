const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { jwtBlackListToken } = require('../services/jwt.service');
require('dotenv').config;

const authenticate = async (req, res, next) => {
  const header = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET_KEY;

  if (header) {
    const token = header.split(' ')[1];
    const blackList = await jwtBlackListToken(token);

    try {
      if (token && !blackList) {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
      } else {
        res.status(401).json({ error: 'Unautherized' });
      }
    } catch (error) {
      return res.status(401).json({ error: 'Invalid Token' });
    }
  } else {
    return res.status(401).json({ error: 'No Token Provided' });
  }
};

module.exports = authenticate;
