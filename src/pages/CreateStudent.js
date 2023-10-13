import validator from "validator";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CreateStudentForm } from "../components/CreateStudentForm";
import { createStudent } from "../FakeApi/student";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { toast } from "react-toastify";

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
            setErrors({});
            toast.info("Operación exitosa", {
                position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000
            });
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Crear estudiante</h2>
                    <CreateStudentForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateStudent };
