import { useState } from "react";
import { CButton, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CRow } from "@coreui/react";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";

const CreateStudentForm = ({
                    errors, 
                    callback, 
                    currentIdentification = "",
                    currentName = "",
                    currentLastName = "",
                    currentEmail = "",
                    currentPhone = "",
                    currentCareer = "",
                    currentSemester = ""}) => {

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

    const cleanValues = () => {
        setIdentification("");
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCareer("");
        setSemester("");
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
        
        callback({student, cleanValues});

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
                    <CFormLabel htmlFor="identification" className='mt-3'>
                        Documento de identidad
                    </CFormLabel>
                    <CFormInput
                        type="number"
                        id="identification"
                        placeholder="documento de identidad"
                        aria-describedby="documento de identidad"
                        feedbackInvalid={errors.identification}
                        invalid={errors.isIdentificationInvalid}
                        defaultValue={currentIdentification}
                        value={identification}
                        onChange={e => setIdentification(e.target.value)}
                    />
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="name" className='mt-3'>
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
                    <CFormLabel htmlFor="lastName" className='mt-3'>
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
                    <CFormLabel htmlFor="career" className='mt-3'>
                        Carrera
                    </CFormLabel>
                    <CFormSelect 
                        id='career'
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
                </CCol>
                <CCol md={6} xs={12}>
                    <CFormLabel htmlFor="semester" className='mt-3'>
                        Semestre
                    </CFormLabel>
                    <CFormInput
                        type="number"
                        id="semester"
                        placeholder="Semestre"
                        aria-describedby="Semestre"
                        feedbackInvalid={errors.semester}
                        invalid={errors.isSemesterInvalid}
                        value={semester}
                        onChange={e => setSemester(e.target.value)}
                    />
                </CCol>
                <CCol sm={12}>
                    <CButton type="submit" color="danger" className="mt-3 text-white w-100">
                        Crear estudiante
                    </CButton>
                </CCol>
            </CRow>
        </CForm>
    );
}

export { CreateStudentForm };