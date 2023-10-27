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
exports.logout = exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUser = exports.signIn = exports.signUp = void 0;
const http_status_codes_1 = require("http-status-codes");
const constants_1 = require("../constants");
const { createUser, validatePassword, getUserById, updateOne, removeUser } = require('../services/user.service');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const { tokenBlacklist } = require('../services/jwt.service');
require('dotenv').config();
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, email } = req.body;
    const isExist = yield user_1.default.findOne({ where: { email } });
    if (isExist) {
        return res.status(constants_1.ERROR_CODES.BAD_REQUEST).json({ message: 'User already exist' });
    }
    const user = yield createUser(name, email, password);
    return res.status(201).json({
        data: user,
        message: 'User created sucessfully',
    });
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    if (!email || !password) {
        res.status(constants_1.ERROR_CODES.BAD_REQUEST).json({
            message: 'Please enter email and password',
        });
    }
    const user = yield user_1.default.findOne({ where: { email: email } });
    if (!user) {
        return res.status(constants_1.ERROR_CODES.BAD_REQUEST).json({ message: 'User not found' });
    }
    const isValid = yield validatePassword(password, user === null || user === void 0 ? void 0 : user.password);
    if (isValid) {
        const token = jsonwebtoken_1.default.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET_KEY, {
            expiresIn: '10h',
        });
        res.status(http_status_codes_1.StatusCodes.OK).json({
            token,
            user: { id: user.id, name: user.name, email: user.email },
        });
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: 'Invalid credential provided' });
    }
});
exports.signIn = signIn;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll();
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAllUser = getAllUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // Call the userService function to retrieve the user
        const user = yield getUserById(id);
        console.log(user);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Send the user data in the response
        res.status(200).json({ status: 'success', data: user });
    }
    catch (error) {
        // Pass the error to the next middleware (error handling middleware)
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const updatedUser = yield updateOne(id, payload);
        return res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'User updated successfully', user: updatedUser });
    }
    catch (error) {
        return res.status(constants_1.ERROR_CODES.BAD_REQUEST).json({ error: error.message });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield removeUser(id);
        res.status(http_status_codes_1.StatusCodes.OK).json({ message: result });
    }
    catch (error) {
        res.status(constants_1.ERROR_CODES.BAD_REQUEST).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const header = req.headers.authorization;
    if (header) {
        const token = header.split(' ')[1];
        tokenBlacklist.push(token);
        res.json({ message: 'User logout sucessfully' });
    }
});
exports.logout = logout;
// export default { signUp, signIn, getAllUser, getUser, updateUser, deleteUser, logout };
