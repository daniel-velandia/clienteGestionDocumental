import { useState } from "react";
import { CButton, CCol, CForm, CFormInput, CFormSelect, CInputGroup, CInputGroupText, CRow } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import CIcon from "@coreui/icons-react";
import { cilAt, cilCalendar, cilCreditCard, cilEducation, cilPhone, cilUser } from "@coreui/icons";

const CreateStudentForm = ({
                    errors, 
                    callback, 
                    currentIdentification = "",
                    currentName = "",
                    currentLastName = "",
                    currentEmail = "",
                    currentPhone = "",
                    currentCareer = "",
                    currentSemester = "",
                    editable = false}) => {

    const [identification, setIdentification] = useState(currentIdentification);
    const [name, setName] = useState(currentName);
    const [lastName, setLastName] = useState(currentLastName);
    const [email, setEmail] = useState(currentEmail);
    const [phone, setPhone] = useState(currentPhone);
    const [career, setCareer] = useState(currentCareer);
    const [semester, setSemester] = useState(currentSemester);

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

        const student = {
            identification: identification, 
            name: name, 
            lastName: lastName, 
            email: email, 
            phone: phone, 
            career: career, 
            semester: semester
        };
        
        callback({student});

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
                            <CIcon icon={cilEducation} />
                        </CInputGroupText>
                        <CFormSelect 
                            id="career"
                            feedbackInvalid={errors.career}
                            invalid={errors.isCareerInvalid}
                            aria-label="Carrera"
                            options={[
                                { label: 'Seleccione una carrera', value: '' },
                                { label: 'Diseño gráfico', value: 'Diseño gráfico' },
                                { label: 'Administración de empresas', value: 'Administración de empresas' },
                                { label: 'Hoteleria y turismo', value: 'Hoteleria y turismo' },
                                { label: 'Ingenieria de software', value: 'Ingenieria de software' },
                                { label: 'Negocios internacionales', value: 'Negocios internacionales' },
                                { label: 'Administración financiera', value: 'Administración financiera' },
                                { label: 'Negocios internacionales distancia', value: 'Negocios internacionales distancia' },
                                { label: 'Gestión logístaca empresarial', value: 'Gestión logístaca empresarial' }
                            ]}
                            value={career}
                            onChange={e => setCareer(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6} xs={12}>
                    <CInputGroup className="mb-4">
                        <CInputGroupText className="border-0">
                            <CIcon icon={cilCalendar} />
                        </CInputGroupText>
                        <CFormSelect 
                            id="semester"
                            feedbackInvalid={errors.semester}
                            invalid={errors.isSemesterInvalid}
                            aria-label="Semestre"
                            options={[
                                { label: 'Seleccione un semestre', value: '' },
                                { label: '1', value: '1' },
                                { label: '2', value: '2' },
                                { label: '3', value: '3' },
                                { label: '4', value: '4' },
                                { label: '5', value: '5' },
                                { label: '6', value: '6' },
                                { label: '7', value: '7' },
                                { label: '8', value: '8' },
                                { label: '9', value: '9' },
                                { label: '10', value: '10' },
                            ]}
                            value={semester}
                            onChange={e => setSemester(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol sm={12}>
                    <CButton type="submit" color="danger" className="mt-3 text-white w-100">
                        {editable ? "Editar" : "Crear"} estudiante
                    </CButton>
                </CCol>
            </CRow>
        </CForm>
    );
}

export { CreateStudentForm };