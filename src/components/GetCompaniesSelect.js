import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { readCompanies } from "../FakeApi/company";

function GetCompaiesSelect({errors, value, callback}) {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        setCompanies(readCompanies());
    }, []);

    return (

        <FloatingLabel controlId="companies" label="Empresa" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.sender}>
                <option value=''>Seleccione una empresa</option>
                {
                    companies.map(company => 
                    <option key={company.nit} value={company.companyId}>
                        {company.nit} {company.companyName}
                    </option>)
                }
            </Form.Select>
            <Form.Control.Feedback type='invalid'>
                {errors.sender}
            </Form.Control.Feedback>
        </FloatingLabel>
    );
}

export { GetCompaiesSelect };