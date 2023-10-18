const { Company } = require('../models');

const createCompany = async (companyData, userId) => {
  return await Company.create({
    ...companyData,
    user_id: userId,
  });
};

const getCompany = async (companyId) => {
  return await Company.findByPk(companyId);
};

const companyUpdate = async (companyId, updatedData) => {
  const company = await Company.findByPk(companyId);
  if (!company) {
    throw new Error('Company not found');
  }

  if (updatedData.name) {
    company.name = updatedData.name;
  }
  if (updatedData.URl) {
    company.URL = updatedData.URL;
  }

  await company.save();
  return company;
};

const destroyCompany = async (companyId) => {
  const company = await Company.findByPk(companyId);
  if (!company) {
    throw new Error('Company not found');
  }

  await company.destroy();
  return;
};

const allCompany = async () => {
  try {
    const companies = await Company.findAll();
    return companies;
  } catch (error) {
    throw new Error('Internal Server Error');
  }
};

module.exports = { createCompany, getCompany, companyUpdate, destroyCompany, allCompany };