import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

export const isRequestValidated = async (req:Request, res:Response, next:NextFunction) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: errors.array()[0].msg,
    });
  }
  next();
};

module.exports = { isRequestValidated };
  