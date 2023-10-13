import validator from "validator";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CreateStudentForm } from "../components/CreateStudentForm";
import { findStudentById, updateStudentById } from "../FakeApi/student";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { useLocation, useParams } from "react-router-dom";

function EditStudent() {

    const {id} = useParams();
    const [currentStudent, setCurrentStudent] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();

    useEffect(() => {
        setCurrentStudent(findStudentById(parseInt(id)));
    }, [id, location])

    async function edit({student}) {

        const error = {};

        if(validator.isEmpty(student.identification)) {
            error.identification = "El documento de identidad no puede estar vacio"
        }

        if(validator.isEmpty(student.name)) {
            error.name = "El nombre no puede estar vacio"
        }

        if(validator.isEmpty(student.lastName)) {
            error.lastName = "El apellido no puede estar vacio"
        }

        if(validator.isEmpty(student.email)) {
            error.email = "El correo no puede estar vacio"
        }

        if(validator.isEmpty(student.phone)) {
            error.phone = "El telefono no puede estar vacio"
        }

        if(validator.isEmpty(student.career)) {
            error.career = "La carrera no puede estar vacia"
        }

        if(validator.isEmpty(student.semester)) {
            error.semester = "El semestre no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            updateStudentById(currentStudent.studentId, student);
            setErrors({})
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Editar estudiante</h2>
                    {
                        currentStudent &&
                            <CreateStudentForm
                                errors={errors}
                                callback={edit}
                                currentIdentification={currentStudent.identification}
                                currentName={currentStudent.name}
                                currentLastName={currentStudent.lastName}
                                currentEmail={currentStudent.email}
                                currentPhone={currentStudent.phone}
                                currentCareer={currentStudent.career}
                                currentSemester={currentStudent.semester} />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export { EditStudent };
