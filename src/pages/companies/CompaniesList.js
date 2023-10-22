import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow, CTooltip } from "@coreui/react"
import { readCompanies } from "../../connections/FakeApi/company";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { CompanyCard } from "../../components/companies/CompanyCard";
import { CompaniesNotFound } from "../../components/companies/CompaniesNotFound";

const CompaniesList = () => {
    
    const location = useLocation();

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const companiesObtained = await readCompanies();
            setCompanies(companiesObtained);
        }
        
        fetchCompanies();
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs={12} className="d-flex justify-content-between">
                    <h1 className="my-3">Compañias</h1>
                    <CTooltip
                        content="Crear compañia"
                        placement="top"
                    >
                        <CButton 
                            component={NavLink}
                            to={"/companies/create"}
                            color="danger"
                            shape="rounded-pill"
                            className="my-btn-add"
                        >
                            <CIcon icon={cilPlus} height={24} className="text-white"/>
                        </CButton>
                    </CTooltip>
                </CCol>
            </CRow>
            <CRow>
                {
                    companies.length > 0 ? companies.map(company => 
                            <CompanyCard key={company.companyId} company={company} />) :
                            <CompaniesNotFound />
                        
                }
            </CRow>
        </div>
    );
}

export default CompaniesList;