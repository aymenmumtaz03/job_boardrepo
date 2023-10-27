"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateCompany = exports.validateGetCompanyById = exports.createCompanyvalidate = void 0;
const express_validator_1 = require("express-validator");
exports.createCompanyvalidate = [
    (0, express_validator_1.check)('name').isString().notEmpty().withMessage('Username is required'),
    (0, express_validator_1.check)('url').isURL().notEmpty().withMessage('Url is required'),
    (0, express_validator_1.check)('phone number').isNumeric().notEmpty().withMessage('Phone number is required'),
];
exports.validateGetCompanyById = [
    (0, express_validator_1.check)('id').isInt({ min: 1 }).withMessage('Invalid value for Id')
];
const validateDeteleCompany = [
    (0, express_validator_1.check)('id').isInt({ min: 1 }).withMessage('Invalid value for Id')
];
exports.validateUpdateCompany = [
    (0, express_validator_1.check)('id').isInt().withMessage('Invalid Id'),
    (0, express_validator_1.check)('name').isString().optional(),
    (0, express_validator_1.check)('url').isURL().optional().withMessage('Correct url is required'),
    (0, express_validator_1.check)('phone number').isNumeric().withMessage('Correct phone number is required'),
];
module.exports = {
    createCompanyvalidate: exports.createCompanyvalidate,
    validateGetCompanyById: exports.validateGetCompanyById,
    validateDeteleCompany,
    validateUpdateCompany: exports.validateUpdateCompany,
};
