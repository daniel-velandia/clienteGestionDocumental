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

    const id = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        const fetchDocuments = async () => {
            const documentObtained = await findDocumentById(id);
            setCurrentDocument(documentObtained);
        }

        fetchDocuments();
    }, [id, location])

    const edit = ({document}) => {

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

        if(validator.isEmpty(document.senderType)) {
            error.senderType = 'Debe seleccionar un tipo de remitente';
            error.isSenderTypeInvalid = true;
        }

        if(validator.isEmpty(document.sender)) {
            error.sender = 'Debe seleccionar un remitente';
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
            navigation("/documents");
        }
    };

    return (
        <CRow  className="justify-content-center mb-3">
            <CCol sm={12} md={10} lg={8} xl={7}>
                {
                    currentDocument &&
                        <CCard className="border-0 shadow-sm">
                            <CCardBody>
                                <CCardTitle component="h2" className="d-flex justify-content-center mb-4">
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
                                    currentSenderType={currentDocument.senderType}
                                    currentSender={currentDocument.sender}
                                    currentAddresseer={currentDocument.addresseer}
                                    currentResponseDocument={currentDocument.responseDocument}
                                    currentInformAddresseer={currentDocument.informAddresseer}
                                    editable={true}
                                />
                            </CCardBody>
                        </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default EditDocument;