import { useState } from "react";
import { StudentsSelect } from "../students/StudentsSelect";
import { CompaniesSelect } from "../companies/CompaniesSelect";
import { AddresseersSelect } from "../addresseers/AddresseersSelect";
import { DocumentsSelect } from "./DocumentsSelect";
import { FileButton } from "./FileButton";
import { CButton, CCol, CForm, CRow, CFormCheck, CFormInput, CFormLabel } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";

const CreateDocumentForm = ({
                    errors, 
                    callback,
                    currentFile = [],
                    currentName = "",
                    currentRegistrationNumber = "",
                    currentTypeRegistration = true,
                    currentTypeDocument = "",
                    currentSubject = "",
                    currentAnnexes = "",
                    currentRequiresResponse = false,
                    currentStudentSender = "",
                    currentCompanySender = "",
                    currentaddresseer = "",
                    currentResponseDocument = "",
                    currentInformAddresseer = false}) => {

    const [file, setFile] = useState(currentFile);
    const [name, setName] = useState(currentName);
    const [registrationNumber, setRegistrationNumber] = useState(currentRegistrationNumber);
    const [typeRegistration, setTypeRegistration] = useState(currentTypeRegistration);
    const [typeDocument, setTypeDocument] = useState(currentTypeDocument);
    const [subject, setSubject] = useState(currentSubject);
    const [annexes, setAnnexes] = useState(currentAnnexes);
    const [requiresResponse, setRequiresResponse] = useState(currentRequiresResponse);
    const [studentSender, setStudentSender] = useState(currentStudentSender);
    const [companySender, setCompanySender] = useState(currentCompanySender);
    const [addresseer, setAddresseer] = useState(currentaddresseer);
    const [responseDocument, setResponseDocument] = useState(currentResponseDocument);
    const [informAddresseer, setInformAddresseer] = useState(currentInformAddresseer);

    const [validated, setValidated] = useState(false)

    const validateForm = e => {

        if (!isEmptyObject(errors)) {
            e.preventDefault()
            e.stopPropagation()

            setValidated(false)
        }

    }

    const cleanValues = () => {
        setFile([]);
        setName("");
        setRegistrationNumber("");
        setTypeRegistration(true);
        setTypeDocument("");
        setSubject("");
        setAnnexes("");
        setRequiresResponse(false);
        setStudentSender("");
        setCompanySender("");
        setAddresseer("");
        setResponseDocument("");
        setInformAddresseer(false);
    }

    const send = e => {
        e.preventDefault();

        const document = {
            file: file, 
            name: name, 
            registrationNumber: registrationNumber, 
            typeRegistration: typeRegistration, 
            typeDocument: typeDocument, 
            subject: subject, 
            annexes: annexes,
            requiresResponse: requiresResponse, 
            studentSender: studentSender, 
            companySender: companySender, 
            addresseer: addresseer, 
            responseDocument: responseDocument
        }

        callback({document, cleanValues});

        validateForm(e);
    }

    return (
        <CForm 
            onSubmit={send}
            noValidate
            validated={validated}
        >
            <CRow>
                <CCol md="6" xs="12">
                    <CFormLabel htmlFor="registrationNumber" className='mt-3'>
                        Numero de radicado
                    </CFormLabel>
                    <CFormInput
                        type="number"
                        id="registrationNumber"
                        placeholder="Numero de radicado"
                        aria-describedby="Numero de radicado"
                        feedbackInvalid={errors.registrationNumber}
                        invalid={errors.isRegistrationNumberInvalid}
                        value={registrationNumber}
                        onChange={e => setRegistrationNumber(e.target.value)}
                    />
                </CCol>
                <CCol md="6" xs="12">
                    <CFormLabel htmlFor="typeDocument" className='mt-3'>
                        Tipo de documento
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="typeDocument"
                        placeholder="Tipo de documento"
                        aria-describedby="Tipo de documento"
                        feedbackInvalid={errors.typeDocument}
                        invalid={errors.isTypeDocumentInvalid}
                        value={typeDocument}
                        onChange={e => setTypeDocument(e.target.value)}
                    />
                </CCol>
                <CCol md="6" xs="12">
                    <CFormLabel htmlFor="subject" className='mt-3'>
                        Asunto
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="subject"
                        placeholder="asunto"
                        aria-describedby="asunto"
                        feedbackInvalid={errors.subject}
                        invalid={errors.isSubjectInvalid}
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                </CCol>
                <CCol md="6" xs="12">
                    <CFormLabel htmlFor="annexes" className='mt-3'>
                        Anexos
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="annexes"
                        placeholder="Anexos"
                        aria-describedby="Anexos"
                        feedbackInvalid={errors.annexes}
                        invalid={errors.isAnnexesInvalid}
                        value={annexes}
                        onChange={e => setAnnexes(e.target.value)}
                    />
                </CCol>
                <CCol md="6" xs="12">
                    <StudentsSelect
                        errors={errors}
                        student={studentSender}
                        setStudent={setStudentSender} />
                </CCol>
                <CCol md="6" xs="12">
                    <CompaniesSelect
                        errors={errors}
                        company={companySender}
                        setCompany={setCompanySender} />
                </CCol>
                <CCol md="6" xs="12">
                    <AddresseersSelect
                        errors={errors}
                        addresseer={addresseer}
                        setAddresseer={setAddresseer} />
                </CCol>
                {
                    !typeRegistration &&
                    <CCol md="6" xs="12">
                        <DocumentsSelect
                            errors={errors}
                            document={responseDocument}
                            setDocument={setResponseDocument} />
                    </CCol>
                }
                <CCol xs="12">
                    <FileButton
                        errors={errors}
                        setFile={setFile}
                        setName={setName} />
                </CCol>
                <CCol xs="12" className="d-inline-grid mb-4">
                    <CFormCheck 
                        button={{ color: 'secondary', variant: 'outline'}} 
                        id="requiresResponse" 
                        autoComplete="off" 
                        label="El documento requiere de una respuesta" 
                        checked={requiresResponse}
                        onChange={e => setRequiresResponse(!requiresResponse)}
                    />
                </CCol>
                <CCol md="6" xs="12"  className="d-inline-grid mb-4">
                    <CFormCheck 
                        button={{ color: 'secondary', variant: 'outline' }} 
                        id="typeRegistration" 
                        autoComplete="off" 
                        label={typeRegistration ? 'Radicado de entrega' : 'Radicado de respuesta'} 
                        checked={typeRegistration}
                        onChange={e => setTypeRegistration(!typeRegistration)}
                    />
                </CCol>
                <CCol md="6" xs="12"  className="d-inline-grid mb-4">
                    <CFormCheck 
                        button={{ color: 'secondary', variant: 'outline' }} 
                        id="informAddresseer" 
                        autoComplete="off" 
                        label="Informar al destinatario" 
                        checked={informAddresseer}
                        onChange={e => setInformAddresseer(!informAddresseer)}
                    />
                </CCol>
                <CCol sm="12">
                    <CButton type="submit" color="danger" className="mt-3 text-white w-100">
                        Crear documento
                    </CButton>
                </CCol>
            </CRow>
        </CForm>
    );
}

export { CreateDocumentForm };