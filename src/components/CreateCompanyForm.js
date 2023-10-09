import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";

function CreateCompanyForm({errors, callback}) {

    const [companyName, setCompanyName] = useState("");
    const [nit, setNit] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [assistantName, setAssistantName] = useState("");

    const send = (e) => {
        e.preventDefault();
        callback({companyName, nit, email, phone, assistantName});
    }

    return (
        <Form onSubmit={send}>
            <Row>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="companyName"
                        label="Nombre de la empresa"
                        className="mt-3 mb-4">
                        <Form.Control 
                            placeholder="Nombre de la empresa"
                            type="text"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
                            isInvalid={errors.companyName} />
                        <Form.Control.Feedback type="invalid">
                            {errors.companyName}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="nit"
                        label="Nit"
                        className="mt-md-3 mb-4">
                        <Form.Control 
                            placeholder="Nit"
                            type="text"
                            value={nit}
                            onChange={e => setNit(e.target.value)}
                            isInvalid={errors.nit} />
                        <Form.Control.Feedback type="invalid">
                            {errors.nit}
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
                        controlId="assistantName"
                        label="Nombre de asistente"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Nombre de asistente"
                            type="text"
                            value={assistantName}
                            onChange={e => setAssistantName(e.target.value)}
                            isInvalid={errors.assistantName} />
                        <Form.Control.Feedback type="invalid">
                            {errors.assistantName}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col sm="12">
                    <Button type="submit" className="mt-3 my-color my-border-none p-3 w-100">
                        Crear empresa
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { CreateCompanyForm };