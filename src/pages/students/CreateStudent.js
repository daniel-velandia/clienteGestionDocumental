import validator from "validator";
import { useState } from "react";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";
import { CreateStudentForm } from "../../components/students/CreateStudentForm";
import { createStudent } from "../../connections/FakeApi/student";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { useNavigate } from "react-router-dom";

function CreateStudent() {

    const [errors, setErrors] = useState({});
    const navigation = useNavigate();

    const create = async ({student}) => {

        const error = {};

        if(validator.isEmpty(student.identification)) {
            error.identification = "El documento de identidad no puede estar vacio";
            error.isIdentificationInvalid = true;
        }

        if(validator.isEmpty(student.name)) {
            error.name = "El nombre no puede estar vacio";
            error.isNameInvalid = true;
        }

        if(validator.isEmpty(student.lastName)) {
            error.lastName = "El apellido no puede estar vacio";
            error.isLastNameInvalid = true;
        }

        if(validator.isEmpty(student.email)) {
            error.email = "El correo no puede estar vacio";
            error.isEmailInvalid = true;
        }

        if(validator.isEmpty(student.phone)) {
            error.phone = "El telefono no puede estar vacio";
            error.isPhoneInvalid = true;
        }

        if(validator.isEmpty(student.career)) {
            error.career = "La carrera no puede estar vacia";
            error.isCareerInvalid = true;
        }

        if(validator.isEmpty(student.semester)) {
            error.semester = "El semestre no puede estar vacio";
            error.isSemesterInvalid = true;
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createStudent(student);
            navigation("/students");
        }
    };

    return (
        <CRow className="justify-content-center mb-3">
            <CCol sm={12} md={10} lg={8} xl={7}>
                <CCard className="border-0 shadow-sm">
                    <CCardBody>
                        <CCardTitle component="h2" className="d-flex justify-content-center mb-4">
                            Crear estudiante
                        </CCardTitle>
                        <CreateStudentForm 
                            errors={errors} 
                            callback={create} 
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default CreateStudent;
