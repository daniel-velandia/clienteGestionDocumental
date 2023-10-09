import axios from "axios";
import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CREATE_DOCUMENT_POST_ENDPOINT } from "../connections/helpers/endpoints";
import { CreateDocumentForm } from "../components/CreateDocumentForm";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { saveAs } from 'file-saver';
import { CreateDocumentApi } from "../FakeApi/document";

function CreateDocument() {

    const [errors, setErrors] = useState({});

    async function create({file, name, registrationNumber, typeRegistration, typeDocument, 
        subject, annexes, requiresResponse, studentSender, companySender, addressee, responseDocument}) {

        const error = {};

        if(file.length < 1) {
            error.file = "Error al cargar el archivo"
        }

        if(validator.isEmpty(registrationNumber)) {
            error.registrationNumber = "El numero de radicado no puede estar vacio"
        }

        if(validator.isEmpty(typeDocument)) {
            error.typeDocument = "El tipo de documento no puede estar vacio"
        }

        if(validator.isEmpty(subject)) {
            error.subject = "El asunto no puede estar vacio"
        }

        if(validator.isEmpty(annexes)) {
            error.annexes = "El anexo no puede estar vacio"
        }

        if(validator.isEmpty(addressee)) {
            error.addressee = "El encargado no puede estar vacio"
        }

        if((validator.isEmpty(studentSender) && validator.isEmpty(companySender)) ||
                (!validator.isEmpty(studentSender) && !validator.isEmpty(companySender))) {
            error.sender = 'Debe seleccionar un remitente (estudiante o empresa)';
        }

        if(!typeRegistration && validator.isEmpty(responseDocument)) {
            error.responseDocument = 'Debe de seleccionar un archivo a responder';
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            CreateDocumentApi({file, name, registrationNumber, typeRegistration, typeDocument, subject, annexes,
                requiresResponse, studentSender, companySender, addressee, responseDocument});

                // const blob = new Blob([new Uint8Array(file)], { type: 'application/pdf' });
    
                // Utiliza FileSaver.js para guardar el Blob como un archivo PDF
                // saveAs(blob, name);
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