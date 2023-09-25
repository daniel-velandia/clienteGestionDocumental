import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";

function CreateStudentForm({errors, callback}) {

    const [identification, setIdentification] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [career, setCareer] = useState("");
    const [semester, setSemester] = useState("");

    const send = (e) => {
        e.preventDefault();
        callback({identification, name, lastName, username, email, phone, career, semester});
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
                        controlId="username"
                        label="Username"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Username"
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
                        controlId="phone"
                        label="Telefono"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Telefono"
                            type="number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            isInvalid={errors.phone} />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="career"
                        label="Carrera"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Carrera"
                            type="text"
                            value={career}
                            onChange={e => setCareer(e.target.value)}
                            isInvalid={errors.career} />
                        <Form.Control.Feedback type="invalid">
                            {errors.career}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="semester"
                        label="Semestre"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Semestre"
                            type="number"
                            value={semester}
                            onChange={e => setSemester(e.target.value)}
                            isInvalid={errors.semester} />
                        <Form.Control.Feedback type="invalid">
                            {errors.semester}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col xs="12" className="d-flex justify-content-center">
                    <Button type="submit" variant="primary" className="mt-3">
                        Crear estudiante
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { CreateStudentForm };