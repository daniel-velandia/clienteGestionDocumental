import validator from "validator";
import { useEffect, useState } from "react";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";
import { CreateStudentForm } from "../../components/students/CreateStudentForm";
import { findStudentById, updateStudentById } from "../../connections/FakeApi/student";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { useLocation, useNavigate } from "react-router-dom";

const EditStudent = () => {

    const [currentStudent, setCurrentStudent] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const navigation = useNavigate();

    const id = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        const findStudent = async () => {
            const studentObtained = await findStudentById(id);
            setCurrentStudent(studentObtained);
        }

        findStudent();
    }, [id, location])

    const edit = async ({student, cleanValues}) => {

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
            updateStudentById(currentStudent.studentId, student);
            navigation("/students");
        }
    };

    return (
        <CRow className="justify-content-center mb-3">
            <CCol sm={12} md={10} lg={8} xl={7}>
                {
                    currentStudent &&
                        <CCard className="border-0 shadow-sm">
                        <CCardBody>
                            <CCardTitle component="h2" className="d-flex justify-content-center mb-4">
                                Editar estudiante
                            </CCardTitle>
                            <CreateStudentForm 
                                errors={errors}
                                callback={edit}
                                currentIdentification={currentStudent.identification}
                                currentName={currentStudent.name}
                                currentLastName={currentStudent.lastName}
                                currentEmail={currentStudent.email}
                                currentPhone={currentStudent.phone}
                                currentCareer={currentStudent.career}
                                currentSemester={currentStudent.semester}
                                editable={true}
                            />
                        </CCardBody>
                    </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default EditStudent;
