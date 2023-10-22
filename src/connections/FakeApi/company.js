var companies = [];

async function createCompany(company) {
  const companyId = Math.floor(Math.random() * 1000000) + 1;
  company.companyId = companyId.toString();
  companies.push(company);
}

async function readCompanies() {
  return companies;
}

async function findCompanyById(companyId) {
  return companies.find(company => company.companyId === companyId);
}

async function updateCompanyById(companyId, company) {
  const currentCompany = await findCompanyById(companyId);
  if (currentCompany) {
    Object.assign(currentCompany, company);
  }
}

async function deleteCompanyById(companyId) {
  companies = companies.filter(company => company.companyId !== companyId);
}

export { createCompany, readCompanies, findCompanyById, updateCompanyById, deleteCompanyById };
