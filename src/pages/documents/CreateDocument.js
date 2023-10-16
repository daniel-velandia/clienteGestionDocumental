import validator from "validator";
import { useState } from "react";
import { CreateDocumentForm } from "../../components/documents/CreateDocumentForm";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { createDocument } from "../../connections/FakeApi/document";
import { toast } from "react-toastify";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";

function CreateDocument() {

    const [errors, setErrors] = useState({});

    async function create({document, cleanValues}) {

        const error = {};

        if(document.file.length < 1) {
            error.file = "Error al cargar el archivo";
            error.isFileInvalid = true;
        }

        if(validator.isEmpty(document.registrationNumber)) {
            error.registrationNumber = "El numero de radicado no puede estar vacio";
            error.isRegistrationNumberInvalid = true;
        }

        if(validator.isEmpty(document.typeDocument)) {
            error.typeDocument = "El tipo de documento no puede estar vacio";
            error.isTypeDocumentInvalid = true;
        }

        if(validator.isEmpty(document.subject)) {
            error.subject = "El asunto no puede estar vacio";
            error.isSubjectInvalid = true;
        }

        if(validator.isEmpty(document.annexes)) {
            error.annexes = "El anexo no puede estar vacio";
            error.isAnnexesInvalid = true;
        }

        if(validator.isEmpty(document.addresseer)) {
            error.addresseer = "El destinatario no puede estar vacio"
            error.isAddresseerInvalid = true;
        }

        if((validator.isEmpty(document.studentSender) && validator.isEmpty(document.companySender)) ||
                (!validator.isEmpty(document.studentSender) && !validator.isEmpty(document.companySender))) {
            error.sender = 'Debe seleccionar un remitente (estudiante o empresa)';
            error.isSenderInvalid = true;
        }

        if(!document.typeRegistration && validator.isEmpty(document.responseDocument)) {
            error.responseDocument = 'Debe de seleccionar un archivo a responder';
            error.isResponseDocumentInvalid = true;
        }

        if(document.typeRegistration && !validator.isEmpty(document.responseDocument)) {
            document.responseDocument = "";
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createDocument(document);

            toast.info(`Documento ${document.name} creado con exito`, {
                position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000
            });

            setErrors({});
            cleanValues();
        }
    };

    return (
        <CRow  className="justify-content-center mb-3">
            <CCol sm="12" md="8" lg="6">
                <CCard>
                    <CCardBody>
                        <CCardTitle className="d-flex justify-content-center">
                            Crear documento
                        </CCardTitle>
                        <CreateDocumentForm 
                            errors={errors} 
                            callback={create} 
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default CreateDocument;