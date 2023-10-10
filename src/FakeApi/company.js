import { CompanyDb } from "../models/Company";

let companies = [];

function createCompany(company) {
  const companyId = Math.floor(Math.random() * 1000000) + 1;
  const companyDb = new CompanyDb(
    companyId, 
    company.companyName,
    company.nit,
    company.email,
    company.phone,
    company.senderName);
  companies.push(companyDb);
}

function readCompanies() {
  return companies;
}

function findCompanyById(companyId) {
  return companies.find(company => company.companyId === companyId);
}

function updateCompanyById(companyId, company) {
  const companyDb = findCompanyById(companyId);
  if (companyDb) {
    Object.assign(companyDb, company);
  }
}

function deleteCompanyById(companyId) {
  companies = companies.filter(company => company.companyId !== companyId);
}

export { createCompany, readCompanies, findCompanyById, updateCompanyById, deleteCompanyById };
