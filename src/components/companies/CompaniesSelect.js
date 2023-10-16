import { useEffect, useState } from "react";
import { readCompanies } from "../../connections/FakeApi/company";
import { CFormLabel, CFormSelect } from "@coreui/react";

const CompaniesSelect = ({errors, company, setCompany}) => {

    const [companies, setCompanies] = useState([]);

    const getCompanies = (companiesObtained) => {

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

        const companiesObtained = readCompanies();

        setCompanies(getCompanies(companiesObtained));

    }, []);

    return (
        <div>
            <CFormLabel htmlFor="company" className='mt-3'>
                Compañias
            </CFormLabel>
            <CFormSelect 
                id='company'
                feedbackInvalid={errors.sender}
                invalid={errors.isSenderInvalid}
                aria-label="compañia"
                options={companies}
                value={company}
                onChange={e => setCompany(e.target.value)}
            />
        </div>
    );
}

export { CompaniesSelect };