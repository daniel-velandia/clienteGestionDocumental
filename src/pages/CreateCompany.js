import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CreateCompanyForm } from "../components/CreateCompanyForm";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { createCompany } from "../FakeApi/company";

function CreateCompany() {

    const [errors, setErrors] = useState({});

    async function create({company}) {

        const error = {};

        if(validator.isEmpty(company.companyName)) {
            error.companyName = "El nombre de la empresa no puede estar vacio"
        }

        if(validator.isEmpty(company.nit)) {
            error.nit = "El nit no puede estar vacio"
        }

        if(validator.isEmpty(company.email)) {
            error.email = "El correo no puede estar vacio"
        }

        if(validator.isEmpty(company.phone)) {
            error.phone = "El telefono no puede estar vacio"
        }

        if(validator.isEmpty(company.assistantName)) {
            error.assistantName = "El nombre del asistente no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createCompany(company);
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <h2 className="my-3 text-center">Crear empresa</h2>
                    <CreateCompanyForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateCompany };