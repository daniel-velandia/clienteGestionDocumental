import { useState } from "react";
import { AddresseersSelect } from "../addresseers/AddresseersSelect";
import { DocumentsSelect } from "./DocumentsSelect";
import { FileButton } from "./FileButton";
import { CButton, CCol, CForm, CRow, CFormInput, CInputGroup, CInputGroupText, CFormSelect, CFormSwitch } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import CIcon from "@coreui/icons-react";
import { cilBarcode, cilFile, cilInbox, cilPaperclip, cilSend } from "@coreui/icons";
import { SenderSelect } from "./SenderSelect";

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
                    currentSenderType = "",
                    currentSender = "",
                    currentAddresseer = "",
                    currentResponseDocument = "",
                    currentInformAddresseer = false,
                    editable = false}) => {

    const [file, setFile] = useState(currentFile);
    const [name, setName] = useState(currentName);
    const [registrationNumber, setRegistrationNumber] = useState(currentRegistrationNumber);
    const [typeRegistration, setTypeRegistration] = useState(currentTypeRegistration);
    const [typeDocument, setTypeDocument] = useState(currentTypeDocument);
    const [subject, setSubject] = useState(currentSubject);
    const [annexes, setAnnexes] = useState(currentAnnexes);
    const [requiresResponse, setRequiresResponse] = useState(currentRequiresResponse);
    const [senderType, setSenderType] = useState(currentSenderType);
    const [sender, setSender] = useState(currentSender);
    const [addresseer, setAddresseer] = useState(currentAddresseer);
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
            senderType: senderType, 
            sender: sender, 
            addresseer: addresseer, 
            responseDocument: responseDocument,
            informAddresseer: informAddresseer
        }

        callback({document});

        validateForm(e);
    }

    return (
        <CForm 
            onSubmit={send}
            noValidate
            validated={validated}
        >
            <CRow>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilBarcode} />
                        </CInputGroupText>
                        <CFormInput
                            id="registrationNumber"
                            type="number"
                            placeholder="Numero de radicado"
                            aria-describedby="Numero de radicado"
                            feedbackInvalid={errors.registrationNumber}
                            invalid={errors.isRegistrationNumberInvalid}
                            value={registrationNumber}
                            onChange={e => setRegistrationNumber(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilFile} />
                        </CInputGroupText>
                        <CFormInput
                            id="typeDocument"
                            type="text"
                            placeholder="Tipo de documento"
                            aria-describedby="Tipo de documento"
                            feedbackInvalid={errors.typeDocument}
                            invalid={errors.isTypeDocumentInvalid}
                            value={typeDocument}
                            onChange={e => setTypeDocument(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilInbox} />
                        </CInputGroupText>
                        <CFormInput
                            id="subject"
                            type="text"
                            placeholder="asunto"
                            aria-describedby="asunto"
                            feedbackInvalid={errors.subject}
                            invalid={errors.isSubjectInvalid}
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilPaperclip} />
                        </CInputGroupText>
                        <CFormInput
                            id="annexes"
                            type="text"
                            placeholder="Anexos"
                            aria-describedby="Anexos"
                            feedbackInvalid={errors.annexes}
                            invalid={errors.isAnnexesInvalid}
                            value={annexes}
                            onChange={e => setAnnexes(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilSend} />
                        </CInputGroupText>
                        <CFormSelect 
                            id="senderType"
                            feedbackInvalid={errors.senderType}
                            invalid={errors.isSenderTypeInvalid}
                            aria-label="Tipo remitente"
                            options={[
                                { label: 'Seleccione un tipo de remitente', value: '' },
                                { label: 'Estudiante', value: 'student' },
                                { label: 'Compañia', value: 'company' },
                            ]}
                            value={senderType}
                            onChange={e => setSenderType(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <SenderSelect
                        errors={errors}
                        senderType={senderType}
                        senderSelected={sender}
                        setSenderSelected={setSender}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <AddresseersSelect
                        errors={errors}
                        addresseer={addresseer}
                        setAddresseer={setAddresseer} />
                </CCol>
                {
                    !typeRegistration &&
                    <CCol md={6} xs={12}>
                        <DocumentsSelect
                            errors={errors}
                            document={responseDocument}
                            setDocument={setResponseDocument} />
                    </CCol>
                }
                <CCol xs={12}>
                    <FileButton
                        errors={errors}
                        setFile={setFile}
                        setName={setName} />
                </CCol>
                <CCol md={6} xs={12} className="mb-4">
                    <CFormSwitch 
                        size="lg"
                        id="typeRegistration"
                        label={typeRegistration ? 'Radicado de entrega' : 'Radicado de respuesta'} 
                        checked={typeRegistration}
                        onChange={e => setTypeRegistration(!typeRegistration)}
                    />
                </CCol>
                <CCol md={6} xs={12} className="mb-4">
                    <CFormSwitch 
                        size="lg"
                        id="informAddresseer"
                        label="Informar al destinatario" 
                        checked={informAddresseer}
                        onChange={e => setInformAddresseer(!informAddresseer)}
                    />
                </CCol>
                <CCol xs={12} className="mb-4">
                    <CFormSwitch 
                        size="lg"
                        id="requiresResponse"
                        label="El documento requiere de una respuesta" 
                        checked={requiresResponse}
                        onChange={e => setRequiresResponse(!requiresResponse)}
                    />
                </CCol>
                <CCol sm="12">
                    <CButton type="submit" color="danger" className="mt-3 text-white w-100">
                        {editable ? "Editar" : "Crear"} documento
                    </CButton>
                </CCol>
            </CRow>
        </CForm>
    );
}

export { CreateDocumentForm };