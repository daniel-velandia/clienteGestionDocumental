import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";
import { UserSignup } from "../models/User";

function SignupForm({errors, callback}) {

    const [identification, setIdentification] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [appPassword, setAppPassword] = useState("");

    const send = (e) => {
        e.preventDefault();
        const user = new UserSignup(identification, name, lastName, email, username, password, appPassword);
        callback({user});
    }

    return (
        <Form onSubmit={send}>
            <Row>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="identification"
                        label="documento de identidad"
                        className="mt-3 mb-4">
                        <Form.Control 
                            placeholder="documento de identidad"
                            type="number"
                            value={identification}
                            onChange={e => setIdentification(e.target.value)}
                            isInvalid={errors.identification} />
                        <Form.Control.Feedback type="invalid">
                            {errors.identification}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="name"
                        label="Nombre"
                        className="mt-md-3 mb-4">
                        <Form.Control 
                            placeholder="Nombre"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            isInvalid={errors.name} />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="lastName"
                        label="Apellido"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Apellido"
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            isInvalid={errors.lastName} />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="email"
                        label="Correo"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Correo"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            isInvalid={errors.email} />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="username"
                        label="nombre de usuario"
                        className="mb-4">
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
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="password"
                        label="contraseña"
                        className="mb-4">
                        <Form.Control 
                            placeholder="contraseña"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            isInvalid={errors.password} 
                            min={8} />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="appPassword"
                        label="contraseña de aplicación"
                        className="mb-4">
                        <Form.Control 
                            placeholder="contraseña de aplicación"
                            type="password"
                            value={appPassword}
                            onChange={e => setAppPassword(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col sm="12">
                    <Button type="submit" className="mt-3 my-color my-border-none p-3 w-100">
                        Registrarse
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { SignupForm };