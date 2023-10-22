import { useEffect, useState } from "react";
import { readCompanies } from "../../connections/FakeApi/company";
import { CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBuilding } from "@coreui/icons";

const CompaniesSelect = ({errors, company, setCompany}) => {

    const [companies, setCompanies] = useState([]);

    const fetchSelectArray = async () => {
        const companiesObtained = await readCompanies();

        const initialSelectArray = [
            { label: 'Seleccione una compañia', value: '' }
        ];

        const companiesArray = companiesObtained.map(company => (
            { 
                label: `${company.nit} ${company.companyName}`, 
                value: company.companyId
            }
        ));

        return initialSelectArray.concat(companiesArray);
    }

    useEffect(() => {
        const fetchCompanies = async () => {
            const companiesObtained = await fetchCompanies();
            setCompanies(companiesObtained);
        }

        fetchCompanies();
    }, []);

    return (
        <CInputGroup className="mb-4">
            <CInputGroupText className="border-0">
                <CIcon icon={cilBuilding} />
            </CInputGroupText>
                <CFormSelect 
                    id="companySender"
                    feedbackInvalid={errors.sender}
                    invalid={errors.isSenderInvalid}
                    aria-label="compañia"
                    options={companies}
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />
        </CInputGroup>
    );
}

export { CompaniesSelect };