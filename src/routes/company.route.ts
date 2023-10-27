import {Router,Request,Response} from 'express';
const router = Router();

const { companyCreate, companyById, updateCompany, removeCompany, allCompanies } = require ("../controller/CompanyController");

const {
  createCompanyvalidate,
  validateGetCompanyById,
  validateUpdateCompany,
  validateDeleteCompany,
} = require ("../validator/company.validator");
import authenticate from '../middleware/auth';

router.get('/company/get', (req:Request, res:Response) => {
  res.status(200).json('company options');
});

router.post('/company/create', createCompanyvalidate, authenticate, companyCreate);
router.get('/getCompanyById/:id', validateGetCompanyById, authenticate, companyById);
router.put('/updateCompany/:id', validateUpdateCompany, authenticate, updateCompany);
// router.delete('/deleteCompany/:id', validateDeleteCompany, authenticate, removeCompany);
router.get('/getAllCompanies', authenticate, allCompanies);

export default router;
