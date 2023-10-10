import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CreateDocumentForm } from "../components/CreateDocumentForm";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { createDocument } from "../FakeApi/document";

function CreateDocument() {

    const [errors, setErrors] = useState({});

    async function create({document}) {

        const error = {};

        if(document.file.length < 1) {
            error.file = "Error al cargar el archivo"
        }

        if(validator.isEmpty(document.registrationNumber)) {
            error.registrationNumber = "El numero de radicado no puede estar vacio"
        }

        if(validator.isEmpty(document.typeDocument)) {
            error.typeDocument = "El tipo de documento no puede estar vacio"
        }

        if(validator.isEmpty(document.subject)) {
            error.subject = "El asunto no puede estar vacio"
        }

        if(validator.isEmpty(document.annexes)) {
            error.annexes = "El anexo no puede estar vacio"
        }

        if(validator.isEmpty(document.addressee)) {
            error.addressee = "El encargado no puede estar vacio"
        }

        if((validator.isEmpty(document.studentSender) && validator.isEmpty(document.companySender)) ||
                (!validator.isEmpty(document.studentSender) && !validator.isEmpty(document.companySender))) {
            error.sender = 'Debe seleccionar un remitente (estudiante o empresa)';
        }

        if(!document.typeRegistration && validator.isEmpty(document.responseDocument)) {
            error.responseDocument = 'Debe de seleccionar un archivo a responder';
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createDocument(document);
        }
    };

    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <h2 className="my-3 text-center">Crear documento</h2>
                    <CreateDocumentForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateDocument };