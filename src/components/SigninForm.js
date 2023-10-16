import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";
import { UserSignin } from "../models/User";

function SigninForm({errors, callback}) {

    const [username, setUsername] = useState("");
    const [password, setPasword] = useState("");

    const send = e => {
        e.preventDefault();
        const user = new UserSignin(username, password);
        callback({user});
    }

    return (
        <Form onSubmit={send}>
            <Row className="justify-content-center">
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="username"
                        label="nombre de usuario"
                        className="mt-3 mb-4">
                        <Form.Control 
                            placeholder="nombre de usuario"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            isInvalid={errors.username} />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="password"
                        label="contraseña"
                        className="mt-md-3 mb-4">
                        <Form.Control 
                            placeholder="contraseña"
                            type="password"
                            value={password}
                            onChange={e => setPasword(e.target.value)}
                            isInvalid={errors.password}
                            min={8} />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="6" xs="12">
                    <Button 
                            type="submit" 
                            className="justify-content-center mt-3 my-color my-border-none p-3 w-100">
                        Iniciar sesion
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { SigninForm };