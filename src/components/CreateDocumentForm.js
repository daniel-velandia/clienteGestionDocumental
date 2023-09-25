import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";
import { GetStudentsSelect } from "./GetStudentsSelect";
import { GetCompaiesSelect } from "./GetCompaniesSelect";
import { GetManagersSelect } from "./GetManagersSelect";
import { GetDocumentsSelect } from "./GetDocumentsSelect";
import { GetFileButton } from "./GetFileButton";

function CreateDocumentForm({errors, callback}) {

    const [file, setFile] = useState([]);
    const [name, setName] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [typeRegistration, setTypeRegistration] = useState(true);
    const [typeDocument, setTypeDocument] = useState("");
    const [subject, setSubject] = useState("");
    const [annexes, setAnnexes] = useState("");
    const [requiresResponse, setRequiresResponse] = useState(false);
    const [studentSender, setStudentSender] = useState("");
    const [companySender, setCompanySender] = useState("");
    const [manager, setManager] = useState("");
    const [responseDocument, setResponseDocument] = useState("");
    const [informManager, setInformManager] = useState(false);

    const send = (e) => {
        e.preventDefault();
        callback({file, name, registrationNumber, typeRegistration, typeDocument, subject, annexes,
            requiresResponse, studentSender, companySender, manager, responseDocument});
    }

    return (
        <Form onSubmit={send}>
            <Row>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="registrationNumber"
                        label="Numero de radicado"
                        className="mt-3 mb-4">
                        <Form.Control 
                            placeholder="Numero de radicado"
                            type="number"
                            value={registrationNumber}
                            onChange={e => setRegistrationNumber(e.target.value)}
                            isInvalid={errors.registrationNumber} />
                        <Form.Control.Feedback type="invalid">
                            {errors.registrationNumber}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="registrationNumber"
                        label="Tipo de documento"
                        className="mt-md-3 mb-4">
                        <Form.Control 
                            placeholder="Tipo de documento"
                            type="text"
                            value={typeDocument}
                            onChange={e => setTypeDocument(e.target.value)}
                            isInvalid={errors.typeDocument} />
                        <Form.Control.Feedback type="invalid">
                            {errors.typeDocument}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="subject"
                        label="Asunto"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Asunto"
                            type="text"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            isInvalid={errors.subject} />
                        <Form.Control.Feedback type="invalid">
                            {errors.subject}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="annexes"
                        label="Anexos"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Anexos"
                            type="text"
                            value={annexes}
                            onChange={e => setAnnexes(e.target.value)}
                            isInvalid={errors.annexes} />
                        <Form.Control.Feedback type="invalid">
                            {errors.annexes}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <GetStudentsSelect
                        errors={errors}
                        value={studentSender}
                        callback={setStudentSender} />
                </Col>
                <Col md="6" xs="12">
                    <GetCompaiesSelect
                        errors={errors}
                        value={companySender}
                        callback={setCompanySender} />
                </Col>
                <Col md="6" xs="12">
                    <GetManagersSelect
                        errors={errors}
                        value={manager}
                        callback={setManager} />
                </Col>
                {
                    !typeRegistration &&
                    <Col md="6" xs="12">
                        <GetDocumentsSelect
                            errors={errors}
                            value={responseDocument}
                            callback={setResponseDocument} />
                    </Col>
                }
                <Col md="6" xs="12">
                    <GetFileButton
                        errors={errors}
                        fileCallback={setFile}
                        nameCallback={setName} />
                </Col>
                <Col md="6" xs="12">
                    <Form.Check 
                        className="mb-4" 
                        type="switch"
                        id="requiresResponse"
                        label="El documento requiere de una respuesta"
                        checked={requiresResponse}
                        onChange={e => setRequiresResponse(!requiresResponse)} />
                </Col>
                <Col md="6" xs="12">
                    <Form.Check 
                        className="mb-4" 
                        type="switch"
                        id="typeRegistration"
                        label={typeRegistration ? 'Radicado de entrega' : 'Radicado de respuesta'}
                        checked={typeRegistration}
                        onChange={e => setTypeRegistration(!typeRegistration)} />
                </Col>
                <Col md="6" xs="12">
                    <Form.Check 
                        className="mb-4" 
                        type="switch"
                        id="informManager"
                        label="Informar al encargado"
                        checked={informManager}
                        onChange={e => setInformManager(!informManager)} />
                </Col>
                <Col xs="12" className="d-flex justify-content-center">
                    <Button type="submit" variant="primary" className="mt-3">
                        Crear documento
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { CreateDocumentForm };