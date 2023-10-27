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
const { Company } = require('../models');
const createCompany = (companyData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Company.create(Object.assign(Object.assign({}, companyData), { user_id: userId }));
});
const getCompany = (companyId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Company.findByPk(companyId);
});
const companyUpdate = (companyId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield Company.findByPk(companyId);
    if (!company) {
        throw new Error('Company not found');
    }
    if (updatedData.name) {
        company.name = updatedData.name;
    }
    if (updatedData.URl) {
        company.URL = updatedData.URL;
    }
    yield company.save();
    return company;
});
const destroyCompany = (companyId) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield Company.findByPk(companyId);
    if (!company) {
        throw new Error('Company not found');
    }
    yield company.destroy();
    return;
});
const allCompany = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield Company.findAll();
        return companies;
    }
    catch (error) {
        throw new Error('Internal Server Error');
    }
});
module.exports = { createCompany, getCompany, companyUpdate, destroyCompany, allCompany };
