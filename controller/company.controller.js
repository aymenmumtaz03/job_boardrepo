const { Company } = require('../models');
const { StatusCodes, BAD_REQUEST } = require('http-status-codes');
const { ERROR_CODES } = require('../constants');
const {
  createCompany,
  getCompany,
  companyUpdate,
  destroyCompany,
  allCompany,
} = require('../services/company.service');

const companyCreate = async (req, res) => {
  const companyData = req.body; // Retrieve company data from the request body
  try {
    const existingCompany = await Company.findOne({
      where: { name: companyData.name },
    });

    if (existingCompany) {
      return res.status(ERROR_CODES.BAD_REQUEST).json({ error: 'A company with the same name already exists' });
    }

    const newCompany = await createCompany(companyData, req.user.id);
    return res.status(StatusCodes.CREATED).json(newCompany);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

const companyById = async (req, res) => {
  const id = req.params.id;
  try {
    const company = await getCompany(id);
    res.status(StatusCodes.OK).json(company);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Company not found' });
  }
};

const updateCompany = async (req, res) => {
  const companyId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedCompany = await companyUpdate(companyId, updatedData);
    res.status(StatusCodes.OK).json(updatedCompany);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

const removeCompany = async (req, res) => {
  const id = req.params.id;
  try {
    await destroyCompany(id);
    res.status(StatusCodes.OK).json({ message: 'User Delted Sucessfully' });
  } catch {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'Company not found' });
  }
};

const allCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(StatusCodes.OK).json(companies);
  } catch {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: ' there is some internal server issue' });
  }
};

module.exports = { companyCreate, companyById, updateCompany, removeCompany, allCompanies };
