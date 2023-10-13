import validator from "validator";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CreateDocumentForm } from "../components/CreateDocumentForm";
import { findDocumentById, updateDocumentById } from "../FakeApi/document";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { useLocation, useParams } from "react-router-dom";


function EditDocument() {

    const {id} = useParams();
    const [currentDocument, setCurrentDocument] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();

    useEffect(() => {
        setCurrentDocument(findDocumentById(parseInt(id)));
    }, [id, location])

    async function edit({document}) {

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

        if(validator.isEmpty(document.addresseer)) {
            error.addresseer = "El destinatario no puede estar vacio"
        }

        if((validator.isEmpty(document.studentSender) && validator.isEmpty(document.companySender)) ||
                (!validator.isEmpty(document.studentSender) && !validator.isEmpty(document.companySender))) {
            error.sender = 'Debe seleccionar un remitente (estudiante o empresa)';
        }

        if(!document.typeRegistration && validator.isEmpty(document.responseDocument)) {
            error.responseDocument = 'Debe de seleccionar un archivo a responder';
        }

        if(document.typeRegistration && !validator.isEmpty(document.responseDocument)) {
            document.responseDocument = "";
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            updateDocumentById(currentDocument.documentId, document);
            setErrors({});
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Editar documento</h2>
                    {
                        currentDocument &&
                            <CreateDocumentForm
                                errors={errors}
                                callback={edit}
                                currentFile={currentDocument.file}
                                currentName={`${document.name}.pdf`}
                                currentRegistrationNumber={currentDocument.registrationNumber}
                                currentTypeRegistration={currentDocument.typeRegistration}
                                currentTypeDocument={currentDocument.typeDocument}
                                currentSubject={currentDocument.subject}
                                currentAnnexes={currentDocument.annexes}
                                currentRequiresResponse={currentDocument.requiresResponse}
                                currentStudentSender={currentDocument.studentSender}
                                currentCompanySender={currentDocument.companySender}
                                currentaddresseer={currentDocument.addresseer}
                                currentResponseDocument={currentDocument.responseDocument}
                                currentInformAddresseer={currentDocument.informAddresseer} />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export { EditDocument };