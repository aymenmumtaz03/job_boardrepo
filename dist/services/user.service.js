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
const http_status_codes_1 = require("http-status-codes");
const user_1 = __importDefault(require("../models/user"));
const bcrypt = require('bcrypt');
const createUser = (userName, userEmail, password) => __awaiter(void 0, void 0, void 0, function* () {
    const hashPassword = yield bcrypt.hash(password, 10);
    console.log(hashPassword);
    const data = { name: userName, email: userEmail, password: hashPassword };
    return yield user_1.default.create(data);
});
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            message: 'Please enter email and password',
        });
    }
});
const validatePassword = (password, hashPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return bcrypt.compare(password, hashPassword);
});
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('userId', userId);
    const user = yield user_1.default.findByPk(userId);
    return user;
});
const updateOne = (userId, newData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        if (newData.name) {
            user.name = newData.name;
        }
        if (newData.email) {
            user.email = newData.email;
        }
        if (newData.password) {
            user.password = newData.passwordassword;
        }
        yield user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
});
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    yield user.destroy();
    return 'User deleted successfully';
});
module.exports = { createUser, signIn, validatePassword, getUserById, updateOne, removeUser };
