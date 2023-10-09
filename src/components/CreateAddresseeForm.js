import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";

function CreateAddresseeForm({errors, callback}) {

    const [identification, setIdentification] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [charge, setCharge] = useState("");
    const [area, setArea] = useState("");

    const send = (e) => {
        e.preventDefault();
        callback({identification, name, lastName, email, phone, charge, area});
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
                        controlId="charge"
                        label="Cargo"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Cargo"
                            type="text"
                            value={charge}
                            onChange={e => setCharge(e.target.value)}
                            isInvalid={errors.charge} />
                        <Form.Control.Feedback type="invalid">
                            {errors.charge}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="area"
                        label="Area"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Area"
                            type="text"
                            value={area}
                            onChange={e => setArea(e.target.value)}
                            isInvalid={errors.area} />
                        <Form.Control.Feedback type="invalid">
                            {errors.area}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col sm="12">
                    <Button type="submit" className="mt-3 my-color my-border-none p-3 w-100">
                        Crear destinatario
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { CreateAddresseeForm };