"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteUser = exports.validateUpdateUser = exports.validateGetUserById = exports.validateGetAllUserRequest = exports.validateSignInRequest = exports.validateSignUpRequest = void 0;
const { check, validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
const { query } = require('express-validator');
const { param } = require('express-validator');
exports.validateSignUpRequest = [
    check('name').notEmpty().withMessage('username is required'),
    check('email').isEmail().withMessage('Valid Email required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long'),
];
exports.validateSignInRequest = [
    check('email').notEmpty().withMessage('Email is required'),
    check('email').isEmail().withMessage('Valid Email required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long'),
];
exports.validateGetAllUserRequest = [
    check('id').notEmpty().withMessage('ID is required').isInt().withMessage('ID must be an integer')
];
exports.validateGetUserById = [
    param('id').isInt({ min: 1 }).withMessage('Invalid value for "id" parameter. It must be a positive integer.')
];
exports.validateUpdateUser = [
    param('id').isInt({ min: 1 }).withMessage('Invalid value for "id" parameter. It must be a positive integer.'),
    check('email').optional().isEmail().withMessage('Valid Email required')
];
exports.validateDeleteUser = [
    param('id').isInt({ min: 1 }).withMessage('Invalid value for "id" parameter. It must be a positive integer.')
];
// module.exports = {
//   validateSignUpRequest,
//   validateSignInRequest,
//   validateGetUserById,
//   validateUpdateUser,
//   validateDeleteUser,
// };
