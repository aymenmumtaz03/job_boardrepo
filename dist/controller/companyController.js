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
Object.defineProperty(exports, "__esModule", { value: true });
const { Company } = require('../models');
const { StatusCodes, BAD_REQUEST } = require('http-status-codes');
const { ERROR_CODES } = require('../constants');
const { createCompany, getCompany, companyUpdate, destroyCompany, allCompany } = require('../services/company.service');
const companyCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const companyData = req.body; // Retrieve company data from the request body
    try {
        const existingCompany = yield Company.findOne({
            where: { name: companyData.name },
        });
        if (existingCompany) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: 'A company with the same name already exists' });
        }
        const newCompany = yield createCompany(companyData, (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id);
        return res.status(StatusCodes.CREATED).json(newCompany);
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
});
const companyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const company = yield getCompany(id);
        res.status(StatusCodes.OK).json(company);
    }
    catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Company not found' });
    }
});
const updateCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyId = req.params.id;
    const updatedData = req.body;
    try {
        const updatedCompany = yield companyUpdate(companyId, updatedData);
        res.status(StatusCodes.OK).json(updatedCompany);
    }
    catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
});
const removeCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield destroyCompany(id);
        res.status(StatusCodes.OK).json({ message: 'User Delted Sucessfully' });
    }
    catch (_b) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Company not found' });
    }
});
const allCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield Company.findAll();
        res.status(StatusCodes.OK).json(companies);
    }
    catch (_c) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: ' there is some internal server issue' });
    }
});
module.exports = { companyCreate, companyById, updateCompany, removeCompany, allCompanies };
