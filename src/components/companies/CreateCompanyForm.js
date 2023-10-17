import { useState } from "react";
import { CButton, CCol, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import CIcon from "@coreui/icons-react";
import { cilAt, cilBarcode, cilBuilding, cilPhone, cilUser } from "@coreui/icons";

const CreateCompanyForm = ({
                    errors, 
                    callback, 
                    currentCompanyName = "",
                    currentNit = "",
                    currentEmail = "",
                    currentPhone = "",
                    currentSenderName = ""}) => {

    const [nit, setNit] = useState(currentNit);
    const [companyName, setCompanyName] = useState(currentCompanyName);
    const [email, setEmail] = useState(currentEmail);
    const [phone, setPhone] = useState(currentPhone);
    const [senderName, setSenderName] = useState(currentSenderName);

    const [validated, setValidated] = useState(false)

    const validateForm = e => {

        if (!isEmptyObject(errors)) {
            e.preventDefault()
            e.stopPropagation()

            setValidated(false)
        }

    }

    const cleanValues = () => {
        setNit("");
        setCompanyName("");
        setEmail("");
        setPhone("");
        setSenderName("");
    }

    const send = e => {
        e.preventDefault();
        
        const company = {
            nit: nit, 
            companyName: companyName, 
            email: email, 
            phone: phone, 
            senderName: senderName
        };

        callback({company, cleanValues});
        
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
                            id="nit"
                            type="text"
                            placeholder="nit"
                            aria-describedby="nit"
                            feedbackInvalid={errors.nit}
                            invalid={errors.isNitInvalid}
                            value={nit}
                            onChange={e => setNit(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilBuilding} />
                        </CInputGroupText>
                        <CFormInput
                            id="companyName"
                            type="text"
                            placeholder="nombre de compañia"
                            aria-describedby="nombre de compañia"
                            feedbackInvalid={errors.companyName}
                            invalid={errors.isCompanyNameInvalid}
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilAt} />
                        </CInputGroupText>
                        <CFormInput
                            id="email"
                            type="email"
                            placeholder="correo"
                            aria-describedby="correo"
                            feedbackInvalid={errors.email}
                            invalid={errors.isEmailInvalid}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilPhone} />
                        </CInputGroupText>
                        <CFormInput
                            id="phone"
                            type="number"
                            placeholder="telefono"
                            aria-describedby="telefono"
                            feedbackInvalid={errors.phone}
                            invalid={errors.isPhoneInvalid}
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                            id="senderName"
                            type="text"
                            placeholder="nombre de remitente"
                            aria-describedby="nombre de remitente"
                            feedbackInvalid={errors.senderName}
                            invalid={errors.isSenderNameInvalid}
                            value={senderName}
                            onChange={e => setSenderName(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol sm={12}>
                    <CButton type="submit" color="danger" className="mt-3 text-white w-100">
                        Crear compañia
                    </CButton>
                </CCol>
            </CRow>
        </CForm>
    );
}

export { CreateCompanyForm };