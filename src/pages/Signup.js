import validator from "validator";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SignupForm } from "../components/SignupForm";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    async function singup({user}) {

        const error = {};

        if(validator.isEmpty(user.identification)) {
            error.identification = "El documento de identidad no puede estar vacio"
        }

        if(validator.isEmpty(user.name)) {
            error.name = "El nombre no puede estar vacio"
        }

        if(validator.isEmpty(user.lastName)) {
            error.lastName = "El apellido no puede estar vacio"
        }

        if(validator.isEmpty(user.email)) {
            error.email = "El correo no puede estar vacio"
        }

        if(validator.isEmpty(user.username)) {
            error.username = "El username no puede estar vacio"
        }

        if(validator.isEmpty(user.password)) {
            error.password = "La contraseña no puede estar vacia"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            navigate("/signin")
            setErrors({});
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Registrarse</h2>
                    <SignupForm errors={errors} callback={singup} />
                </Col>
            </Row>
        </Container>
    );
}

export { Signup };
