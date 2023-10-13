import validator from "validator";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SigninForm } from "../components/SigninForm";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { useNavigate } from "react-router-dom";

function Signin() {

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    async function signin({user}) {

        const error = {};

        if(validator.isEmpty(user.username)) {
            error.username = "El username no puede estar vacio"
        }

        if(validator.isEmpty(user.password)) {
            error.password = "La contraseña no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            navigate("/signin");
            setErrors({});
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Iniciar sesion</h2>
                    <SigninForm errors={errors} callback={signin} />
                </Col>
            </Row>
        </Container>
    );
}

export { Signin };
