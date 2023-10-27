"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const { companyCreate, companyById, updateCompany, removeCompany, allCompanies } = require("../controller/CompanyController");
const { createCompanyvalidate, validateGetCompanyById, validateUpdateCompany, validateDeleteCompany, } = require("../validator/company.validator");
const auth_1 = __importDefault(require("../middleware/auth"));
router.get('/company/get', (req, res) => {
    res.status(200).json('company options');
});
router.post('/company/create', createCompanyvalidate, auth_1.default, companyCreate);
router.get('/getCompanyById/:id', validateGetCompanyById, auth_1.default, companyById);
router.put('/updateCompany/:id', validateUpdateCompany, auth_1.default, updateCompany);
// router.delete('/deleteCompany/:id', validateDeleteCompany, authenticate, removeCompany);
router.get('/getAllCompanies', auth_1.default, allCompanies);
exports.default = router;
