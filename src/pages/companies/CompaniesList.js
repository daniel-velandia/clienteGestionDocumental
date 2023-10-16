import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow } from "@coreui/react"
import { readCompanies } from "../../connections/FakeApi/company";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { CompanyCard } from "../../components/companies/CompanyCard";
import { CompaniesNotFound } from "../../components/companies/CompaniesNotFound";

const CompaniesList = () => {
    
    const location = useLocation();

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        setCompanies(readCompanies());
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs="12" className="d-flex">
                    <h2 className="my-3">Compañias</h2>
                    <CButton 
                        component={NavLink}
                        to={`/companies/create`}
                        color="link"
                        className="mt-2 p-3"
                    >
                        <CIcon icon={cilPlus} height={24} className="text-danger"/>
                    </CButton>
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