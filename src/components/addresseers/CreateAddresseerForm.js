import { useState } from "react";
import { CButton, CCol, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import CIcon from "@coreui/icons-react";
import { cilAt, cilCreditCard, cilInstitution, cilPhone, cilUser } from "@coreui/icons";

const CreateAddresseerForm = ({
                    errors, 
                    callback, 
                    currentIdentification = "",
                    currentName = "",
                    currentLastName = "",
                    currentEmail = "",
                    currentPhone = "",
                    currentCharge = "",
                    currentArea = ""}) => {

    const [identification, setIdentification] = useState(currentIdentification);
    const [name, setName] = useState(currentName);
    const [lastName, setLastName] = useState(currentLastName);
    const [email, setEmail] = useState(currentEmail);
    const [phone, setPhone] = useState(currentPhone);
    const [charge, setCharge] = useState(currentCharge);
    const [area, setArea] = useState(currentArea);

    const [validated, setValidated] = useState(false)

    const validateForm = e => {

        if (!isEmptyObject(errors)) {
            e.preventDefault()
            e.stopPropagation()

            setValidated(false)
        }

    }

    const cleanValues = () => {
        setIdentification("");
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCharge("");
        setArea("");
    }

    const send = e => {
        e.preventDefault();
        
        const addresseer = {
            identification: identification, 
            name: name, 
            lastName: lastName, 
            email: email, 
            phone: phone, 
            charge: charge, 
            area: area
        };

        callback({addresseer, cleanValues});
        
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
                            <CIcon icon={cilCreditCard} />
                        </CInputGroupText>
                        <CFormInput
                            id="identification"
                            type="number"
                            placeholder="identificación"
                            aria-describedby="identificación"
                            feedbackInvalid={errors.identification}
                            invalid={errors.isIdentificationInvalid}
                            defaultValue={currentIdentification}
                            value={identification}
                            onChange={e => setIdentification(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                            id="name"
                            type="text"
                            placeholder="nombre"
                            aria-describedby="nombre"
                            feedbackInvalid={errors.name}
                            invalid={errors.isNameInvalid}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                            id="lastName"
                            type="text"
                            placeholder="apellido"
                            aria-describedby="apellido"
                            feedbackInvalid={errors.lastName}
                            invalid={errors.isLastNameInvalid}
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
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
                            <CIcon icon={cilInstitution} />
                        </CInputGroupText>
                        <CFormInput
                            id="charge"
                            type="text"
                            placeholder="cargo"
                            aria-describedby="cargo"
                            feedbackInvalid={errors.charge}
                            invalid={errors.isChargeInvalid}
                            value={charge}
                            onChange={e => setCharge(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilInstitution} />
                        </CInputGroupText>
                        <CFormInput
                            id="area"
                            type="text"
                            placeholder="area"
                            aria-describedby="area"
                            feedbackInvalid={errors.area}
                            invalid={errors.isAreaInvalid}
                            value={area}
                            onChange={e => setArea(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol sm={12}>
                    <CButton type="submit" color="danger" className="mt-3 text-white w-100">
                        Crear destinatario
                    </CButton>
                </CCol>
            </CRow>
        </CForm>
    );
}

export { CreateAddresseerForm };