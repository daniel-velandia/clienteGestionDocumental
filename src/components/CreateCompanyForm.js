import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";
import { Company } from "../models/Company";

function CreateCompanyForm({
                    errors, 
                    callback,
                    currentCompanyName = "",
                    currentNit = "",
                    currentEmail = "",
                    currentPhone = "",
                    currentSenderName = "",}) {

    const [companyName, setCompanyName] = useState(currentCompanyName);
    const [nit, setNit] = useState(currentNit);
    const [email, setEmail] = useState(currentEmail);
    const [phone, setPhone] = useState(currentPhone);
    const [senderName, setSenderName] = useState(currentSenderName);

    const send = (e) => {
        e.preventDefault();
        const company = new Company(companyName, nit, email, phone, senderName);
        callback({company});
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
                        controlId="senderName"
                        label="Nombre de asistente"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Nombre de asistente"
                            type="text"
                            value={senderName}
                            onChange={e => setSenderName(e.target.value)}
                            isInvalid={errors.senderName} />
                        <Form.Control.Feedback type="invalid">
                            {errors.senderName}
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