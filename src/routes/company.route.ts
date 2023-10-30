import { Router, Request, Response } from 'express';
const router = Router();

import companyController from '../controller/companyController';

import authenticate from '../middleware/auth';
import isRequestValidated from '../middleware/validateRequest';
import { validateGetUserById } from '../validator/auth.validator';
import {
  validateDeteleCompany,
  createCompanyvalidate,
  validateGetCompanyById,
  validateUpdateCompany,
} from '../validator/company.validator';

router.get('/company/get', (req: Request, res: Response) => {
  res.status(200).json('company options');
});

router.post('/create', createCompanyvalidate, authenticate, companyController.companyCreate);
router.get('/getCompanyById/:id', validateGetCompanyById, authenticate, companyController.companyById);
router.put('/updateCompany/:id', validateUpdateCompany, authenticate, companyController.updateCompany);
// router.delete('/deleteCompany/:id', authenticate,validateDeleteCompany,isRequestValidated,companyController.removeCompany);
router.delete(
  '/deleteCompany/:id',
  authenticate,
  validateDeteleCompany,
  // isRequestValidated,
  companyController.removeCompany,
);
router.get('/getAllCompanies', authenticate, companyController.allCompanies);

export default router;
