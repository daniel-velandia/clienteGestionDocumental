import { GetAllDocuments } from "./document";

const companies = [];

function CreateCompanyApi({ companyName, nit, email, phone, assistantName }) {
  const companyId = Math.floor(Math.random() * 1000000);
  companies.push({ companyId, companyName, nit, email, phone, assistantName });
}

function GetCompany({ id }) {
  return companies.find((company) => company.companyId === id);
}

function UpdateCompany({ id, companyName, nit, email, phone, assistantName }) {
  const company = companies.find((company) => company.companyId === id);
  if (company) {
    company.companyName = companyName;
    company.nit = nit;
    company.email = email;
    company.phone = phone;
    company.assistantName = assistantName;
    companies[id] = company;
  }
}

function DeleteCompany({ id }) {
  const index = companies.findIndex((company) => company.companyId === id);
  if (index !== -1) {
    companies.splice(index, 1);
  }
}

function GetAllCompanies() {
  return companies;
}

export { CreateCompanyApi, GetCompany, UpdateCompany, DeleteCompany, GetAllCompanies }