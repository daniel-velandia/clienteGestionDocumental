import { useState } from "react";
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";

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
                    <CFormLabel htmlFor="nit" className='mt-3'>
                        Nit
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="nit"
                        placeholder="nit"
                        aria-describedby="nit"
                        feedbackInvalid={errors.nit}
                        invalid={errors.isNitInvalid}
                        value={nit}
                        onChange={e => setNit(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="companyName" className='mt-3'>
                        Nombre de compañia
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="companyName"
                        placeholder="nombre de compañia"
                        aria-describedby="nombre de compañia"
                        feedbackInvalid={errors.companyName}
                        invalid={errors.isCompanyNameInvalid}
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="email" className='mt-3'>
                        Correo
                    </CFormLabel>
                    <CFormInput
                        type="email"
                        id="email"
                        placeholder="correo"
                        aria-describedby="correo"
                        feedbackInvalid={errors.email}
                        invalid={errors.isEmailInvalid}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="phone" className='mt-3'>
                        Telefono
                    </CFormLabel>
                    <CFormInput
                        type="number"
                        id="phone"
                        placeholder="telefono"
                        aria-describedby="telefono"
                        feedbackInvalid={errors.phone}
                        invalid={errors.isPhoneInvalid}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="senderName" className='mt-3'>
                        Nombre de remitente
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="senderName"
                        placeholder="nombre de remitente"
                        aria-describedby="nombre de remitente"
                        feedbackInvalid={errors.senderName}
                        invalid={errors.isSenderNameInvalid}
                        value={senderName}
                        onChange={e => setSenderName(e.target.value)}
                    />
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