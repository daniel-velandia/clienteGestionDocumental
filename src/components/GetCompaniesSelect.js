import { useEffect, useState } from "react";
import { LIST_COMPANY_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetCompaiesSelect({errors, value, callback}) {

    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(LIST_COMPANY_GET_ENDPOINT)
    //     .then(response => {
    //         setCompanies(response.data);
    //     }).catch(err => {
    //         navigate(-1);
    //     })
    // });

    return (

        <FloatingLabel controlId="companies" label="Empresa" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.sender}>
                <option value=''>Seleccione una empresa</option>
                {
                    companies.map(company => 
                    <option key={company.idCompany} value={company.idCompany}>
                        {`${company.nit} ${company.companyName}`}
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