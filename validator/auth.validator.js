const { check, validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
const { query } = require('express-validator');
const { param } = require('express-validator');

const validateSignUpRequest = [
  check('name').notEmpty().withMessage('username is required'),
  check('email').isEmail().withMessage('Valid Email required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long'),
];

const validateSignInRequest = [
  check('email').notEmpty().withMessage('Email is required'),
  check('email').isEmail().withMessage('Valid Email required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long'),
];

const validateGetAllUserRequest = [
  check('id').notEmpty().withMessage('ID is required').isInt().withMessage('ID must be an integer'),
];

const validateGetUserById = [
  param('id').isInt({ min: 1 }).withMessage('Invalid value for "id" parameter. It must be a positive integer.'),
];

const validateUpdateUser = [
  param('id').isInt({ min: 1 }).withMessage('Invalid value for "id" parameter. It must be a positive integer.'),
  check('email').optional().isEmail().withMessage('Valid Email required'),
];

const validateDeleteUser = [
  param('id').isInt({ min: 1 }).withMessage('Invalid value for "id" parameter. It must be a positive integer.'),
];

module.exports = {
  validateSignUpRequest,
  validateSignInRequest,
  validateGetUserById,
  validateUpdateUser,
  validateDeleteUser,
};
