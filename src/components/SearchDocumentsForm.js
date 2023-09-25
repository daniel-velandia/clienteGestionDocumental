import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";

function SearchDocumentsForm({errors, callback}) {

    const [sender, setSender] = useState("");
    const [senderType, setSenderType] = useState("");
    const [dateCreated, setDateCreated] = useState("");
    const [filter, setFilter] = useState("");

    const send = (e) => {
        e.preventDefault();
        callback({sender, senderType, dateCreated, filter});
    }

    return (
        <Form onSubmit={send}>
            <Row>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="sender"
                        label="Remitente"
                        className="mt-3 mb-4">
                        <Form.Control 
                            placeholder="Remitente"
                            type="text"
                            value={sender}
                            onChange={e => setSender(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel controlId="senderType" label="tipo de remitente" className="mt-md-3 mb-4">
                        <Form.Select 
                            value={senderType} 
                            onChange={e => setSenderType(e.target.value)}
                            isInvalid={errors.senderType} >
                            <option value=''>Selecciona el tipo de remitente</option>
                            <option value='Student'>Estudiante</option>
                            <option value='Company'>Empresa</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            {errors.senderType}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="dateCreated"
                        label="Fecha de creado"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Fecha de creado"
                            type="date"
                            value={dateCreated}
                            onChange={e => setDateCreated(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel controlId="filter" label="Filtro" className="mb-4">
                        <Form.Select 
                            value={filter} 
                            onChange={e => setFilter(e.target.value)} >
                            <option value=''>Seleccione un filtro</option>
                            <option value='all'>Todos los radicados</option>
                            <option value='delivery'>Radicados de entrega</option>
                            <option value='reply'>Radicados de respuesta</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col xs="12" className="d-flex justify-content-center">
                    <Button type="submit" variant="primary" className="mt-3">
                        Buscar
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { SearchDocumentsForm };