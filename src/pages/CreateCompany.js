import validator from "validator";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CreateCompanyForm } from "../components/CreateCompanyForm";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { createCompany } from "../FakeApi/company";
import { toast } from "react-toastify";

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

        if(validator.isEmpty(company.senderName)) {
            error.senderName = "El nombre del remitente no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createCompany(company);
            setErrors({});
            toast.info("Operación exitosa", {
                position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000
            });
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Crear empresa</h2>
                    <CreateCompanyForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateCompany };