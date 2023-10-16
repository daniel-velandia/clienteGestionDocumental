var companies = [];

function createCompany(company) {
  const companyId = Math.floor(Math.random() * 1000000) + 1;
  company.companyId = companyId;
  companies.push(company);
}

function readCompanies() {
  return companies;
}

function findCompanyById(companyId) {
  return companies.find(company => company.companyId === companyId);
}

function updateCompanyById(companyId, company) {
  const currentCompany = findCompanyById(companyId);
  if (currentCompany) {
    Object.assign(currentCompany, company);
  }
}

function deleteCompanyById(companyId) {
  companies = companies.filter(company => company.companyId !== companyId);
}

export { createCompany, readCompanies, findCompanyById, updateCompanyById, deleteCompanyById };
