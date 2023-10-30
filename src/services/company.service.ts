import Company from "../models/company";

const createCompany = async (companyData: any, userId: any) => {

  return await Company.create({
    ...companyData,
    user_id: userId,
  });

};


const getCompany = async (companyId: any) => {
  return await Company.findByPk(companyId);
};

const companyUpdate = async (companyId: any, updatedData: { name: any; URl: any; URL: any; }) => {
  const company = await Company.findByPk(companyId);
  if (!company) {
    throw new Error('Company not found');
  }

  if (updatedData.name) {
    company.name = updatedData.name;
  }
  if (updatedData.URl) {
    company.url = updatedData.URL;
  }

  await company.save();
  return company;
};

const destroyCompany = async (companyId: any) => {
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

export default { createCompany, getCompany, companyUpdate, destroyCompany, allCompany };
