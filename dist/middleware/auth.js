"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { jwtBlackListToken } = require('../services/jwt.service');
require('dotenv').config;
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const header = req.headers.authorization;
    const secretKey = process.env.JWT_SECRET_KEY;
    if (header) {
        const token = header.split(' ')[1];
        const blackList = yield jwtBlackListToken(token);
        try {
            if (token && !blackList) {
                const decoded = jsonwebtoken_1.default.verify(token, secretKey);
                `req.user  = decoded `;
                next();
            }
            else {
                res.status(401).json({ error: 'Unautherized' });
            }
        }
        catch (error) {
            return res.status(401).json({ error: 'Invalid Token' });
        }
    }
    else {
        return res.status(401).json({ error: 'No Token Provided' });
    }
});
exports.default = authenticate;
