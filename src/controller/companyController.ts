import { Request, Response } from 'express';
import { CustomRequest } from 'utils/request';
import Company from '../models/company';
import { StatusCodes, BAD_REQUEST } from 'http-status-codes';
import companyService from '../services/company.service';
import { isDataView } from 'util/types';
import { Op } from 'sequelize';

const companyCreate = async (req: CustomRequest, res: Response) => {
  const companyData = req.body; // Retrieve company data from the request body
  try {
    const existingCompany = await Company.findOne({ 
      where: { [Op.or]:[{name: companyData.name},{url: companyData.url}]  },
    });

    if (existingCompany) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'A company with the same name/url already exists' });
    }
  

    const newCompany = await companyService.createCompany(companyData, req?.user?.id);

    if (newCompany) {
      return res.status(StatusCodes.CREATED).json(newCompany);
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'company creation failed' });
    }
  } catch (error) {
    console.error('error creating company', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

const companyById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const company = await companyService.getCompany(id);
    res.status(StatusCodes.OK).json(company);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Company not found' });
  }
};

const updateCompany = async (req: Request, res: Response) => {
  const companyId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedCompany = await companyService.companyUpdate(companyId, updatedData);
    res.status(StatusCodes.OK).json(updatedCompany);
  } catch (error: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

const removeCompany = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await companyService.destroyCompany(id);
    res.status(StatusCodes.OK).json({ message: 'User Delted Sucessfully' });
  } catch {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'Company not found' });
  }
};

const allCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.findAll();
    res.status(StatusCodes.OK).json(companies);
  } catch {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: ' there is some internal server issue' });
  }
};

export default { companyCreate, companyById, updateCompany, removeCompany, allCompanies };
