import validator from "validator";
import { useEffect, useState } from "react";
import { CreateDocumentForm } from "../../components/documents/CreateDocumentForm";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { updateDocumentById, findDocumentById } from "../../connections/FakeApi/document";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";


const EditDocument = () => {

    const [currentDocument, setCurrentDocument] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const navigation = useNavigate();

    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        setCurrentDocument(findDocumentById(parseInt(query)));
    }, [query, location])

    const edit = ({document, cleanValues}) => {

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
            updateDocumentById(currentDocument.documentId, document);
            navigation("/");
        }
    };

    return (
        <CRow  className="justify-content-center mb-3">
            <CCol sm="12" md="8" lg="6">
                {
                    currentDocument &&
                        <CCard>
                            <CCardBody>
                                <CCardTitle className="d-flex justify-content-center">
                                    Editar documento
                                </CCardTitle>
                                <CreateDocumentForm 
                                    errors={errors}
                                    callback={edit}
                                    currentFile={currentDocument.file}
                                    currentName={currentDocument.name}
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
                                    currentInformAddresseer={currentDocument.informAddresseer}
                                />
                            </CCardBody>
                        </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default EditDocument;