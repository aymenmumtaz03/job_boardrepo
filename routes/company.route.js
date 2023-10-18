const express = require('express');
const router = express.Router();

const {
  companyCreate,
  companyById,
  updateCompany,
  removeCompany,
  allCompanies,
} = require('../controller/company.controller');

const {
  createCompanyvalidate,
  validateGetCompanyById,
  validateDeteleCompany,
  validateUpdateCompany,
} = require('../validator/company.validator');
const authenticate = require('../middleware/auth');

router.get('/company/get', (req, res) => {
  res.send('company options');
});

router.post('/company/create', createCompanyvalidate, authenticate, companyCreate);
router.get('/getCompanyById/:id', validateGetCompanyById, authenticate, companyById);
router.put('/toUpdateCompany/:id', validateUpdateCompany, authenticate, updateCompany);
router.delete('/deleteCompany/:id', validateDeteleCompany, authenticate, removeCompany);
router.get('/getAllCompanies', authenticate, allCompanies);

module.exports = router;
