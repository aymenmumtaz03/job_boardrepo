import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
const { jwtBlackListToken } = require ('../services/jwt.service');
import { Request, Response, NextFunction } from 'express';
require('dotenv').config;

const authenticate = async (req:Request, res:Response, next:NextFunction) => {
  const header = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET_KEY;

  if (header) {
    const token = header.split(' ')[1];
    const blackList = await jwtBlackListToken(token);

    try {
      if (token && !blackList) {
        const decoded = jwt.verify(token, secretKey as any ) ;
        `req.user  = decoded `;
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

export default authenticate;
