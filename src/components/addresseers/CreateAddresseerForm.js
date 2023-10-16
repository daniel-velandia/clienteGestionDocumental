import { useState } from "react";
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";

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
                    <CFormLabel htmlFor="identification">
                        Documento de identidad
                    </CFormLabel>
                    <CFormInput
                        type="number"
                        id="identification"
                        placeholder="documento de identidad"
                        aria-describedby="documento de identidad"
                        feedbackInvalid={errors.identification}
                        invalid={errors.isIdentificationInvalid}
                        value={identification}
                        onChange={e => setIdentification(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="name">
                        Nombre
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="name"
                        placeholder="nombre"
                        aria-describedby="nombre"
                        feedbackInvalid={errors.name}
                        invalid={errors.isNameInvalid}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="lastName">
                        Apellido
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="lastName"
                        placeholder="apellido"
                        aria-describedby="apellido"
                        feedbackInvalid={errors.lastName}
                        invalid={errors.isLastNameInvalid}
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="email">
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
                    <CFormLabel htmlFor="phone">
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
                    <CFormLabel htmlFor="charge">
                        Cargo
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="charge"
                        placeholder="cargo"
                        aria-describedby="cargo"
                        feedbackInvalid={errors.charge}
                        invalid={errors.isChargeInvalid}
                        value={charge}
                        onChange={e => setCharge(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="area">
                        Area
                    </CFormLabel>
                    <CFormInput
                        type="text"
                        id="area"
                        placeholder="area"
                        aria-describedby="area"
                        feedbackInvalid={errors.area}
                        invalid={errors.isAreaInvalid}
                        value={area}
                        onChange={e => setArea(e.target.value)}
                    />
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