import axios from "axios";
import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CREATE_COMPANY_POST_ENDPOINT } from "../connections/helpers/endpoints";
import { CreateCompanyForm } from "../components/CreateCompanyForm";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";

function CreateCompany() {

    const [errors, setErrors] = useState({});

    const create = async ({companyName, nit, email, phone, assistantName}) => {

        const error = {};

        if(validator.isEmpty(companyName)) {
            error.companyName = "El nombre de la empresa no puede estar vacio"
        }

        if(validator.isEmpty(nit)) {
            error.nit = "El nit no puede estar vacio"
        }

        if(validator.isEmpty(email)) {
            error.email = "El correo no puede estar vacio"
        }

        if(validator.isEmpty(phone)) {
            error.phone = "El telefono no puede estar vacio"
        }

        if(validator.isEmpty(assistantName)) {
            error.assistantName = "El nombre del asistente no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {

            console.log({companyName, nit, email, phone, assistantName});

            // axios.post(CREATE_COMPANY_POST_ENDPOINT, {companyName, nit, email, phone, assistentName})
            // .then( response => {
            //     
            // }).catch( err => {
            //     setErrors({new: err.response.data.message})
            // });
        }
    };

    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <CreateCompanyForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateCompany };