import { check } from 'express-validator';

export const createCompanyvalidate = [
  check('name').isString().notEmpty().withMessage('Username is required'),
  check('url').isURL().notEmpty().withMessage('Url is required'),
  check('phone number').isNumeric().notEmpty().withMessage('Phone number is required'),
];

export const validateGetCompanyById = [
    check('id').isInt({ min: 1 }).withMessage('Invalid value for Id')];

const validateDeteleCompany = [
    check('id').isInt({ min: 1 }).withMessage('Invalid value for Id')];

export const validateUpdateCompany = [
  check('id').isInt().withMessage('Invalid Id'),
  check('name').isString().optional(),
  check('url').isURL().optional().withMessage('Correct url is required'),
  check('phone number').isNumeric().withMessage('Correct phone number is required'),
];

module.exports = {
  createCompanyvalidate,
  validateGetCompanyById,
  validateDeteleCompany,
  validateUpdateCompany,
};
