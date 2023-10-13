import validator from "validator";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CreateCompanyForm } from "../components/CreateCompanyForm";
import { findCompanyById, updateCompanyById } from "../FakeApi/company";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { useLocation, useParams } from "react-router-dom";

function EditCompany() {

    const {id} = useParams();
    const [currentCompany, setCurrentCompany] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();

    useEffect(() => {
        setCurrentCompany(findCompanyById(parseInt(id)));
    }, [id, location])

    async function edit({company}) {

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
            updateCompanyById(currentCompany.companyId, company);
            setErrors({});
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Editar compañia</h2>
                    {
                        currentCompany &&
                            <CreateCompanyForm
                                errors={errors}
                                callback={edit}
                                currentCompanyName={currentCompany.companyName}
                                currentNit={currentCompany.nit}
                                currentEmail={currentCompany.email}
                                currentPhone={currentCompany.phone}
                                currentSenderName={currentCompany.senderName}/>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export { EditCompany };
