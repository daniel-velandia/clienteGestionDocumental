import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CreateStudentForm } from "../components/CreateStudentForm";
import { createStudent } from "../FakeApi/student";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";

function CreateStudent() {

    const [errors, setErrors] = useState({});

    async function create({student}) {

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
            createStudent(student);
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <h2 className="my-3 text-center">Crear estudiante</h2>
                    <CreateStudentForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateStudent };
