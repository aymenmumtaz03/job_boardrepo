const tokenBlacklist: string | any[] = [];
import { Response } from 'express';
const jwtBlackListToken = async (token: string, res:Response) => {
    let response = false;
    if (token && tokenBlacklist.includes(token)) {
      response = true;
      res.status(401).json({ message: 'Unauthorized' });
    }
    return response;
  return tokenBlacklist.includes(token);
};

module.exports = { tokenBlacklist, jwtBlackListToken };
