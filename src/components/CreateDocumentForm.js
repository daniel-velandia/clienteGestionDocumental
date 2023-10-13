import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";
import { GetStudentsSelect } from "./GetStudentsSelect";
import { GetCompaiesSelect } from "./GetCompaniesSelect";
import { GetAddresseersSelect } from "./GetAddresseersSelect";
import { GetDocumentsSelect } from "./GetDocumentsSelect";
import { GetFileButton } from "./GetFileButton";
import { Document } from "../models/Document";

function CreateDocumentForm({
                    errors, 
                    callback,
                    currentFile = [],
                    currentName = "",
                    currentRegistrationNumber = "",
                    currentTypeRegistration = true,
                    currentTypeDocument = "",
                    currentSubject = "",
                    currentAnnexes = "",
                    currentRequiresResponse = false,
                    currentStudentSender = "",
                    currentCompanySender = "",
                    currentaddresseer = "",
                    currentResponseDocument = "",
                    currentInformAddresseer = false}) {

    const [file, setFile] = useState(currentFile);
    const [name, setName] = useState(currentName);
    const [registrationNumber, setRegistrationNumber] = useState(currentRegistrationNumber);
    const [typeRegistration, setTypeRegistration] = useState(currentTypeRegistration);
    const [typeDocument, setTypeDocument] = useState(currentTypeDocument);
    const [subject, setSubject] = useState(currentSubject);
    const [annexes, setAnnexes] = useState(currentAnnexes);
    const [requiresResponse, setRequiresResponse] = useState(currentRequiresResponse);
    const [studentSender, setStudentSender] = useState(currentStudentSender);
    const [companySender, setCompanySender] = useState(currentCompanySender);
    const [addresseer, setAddresseer] = useState(currentaddresseer);
    const [responseDocument, setResponseDocument] = useState(currentResponseDocument);
    const [informAddresseer, setInformAddresseer] = useState(currentInformAddresseer);

    const send = (e) => {
        e.preventDefault();
        const document = new Document(
            file, 
            name, 
            registrationNumber, 
            typeRegistration, 
            typeDocument, 
            subject, 
            annexes,
            requiresResponse, 
            studentSender, 
            companySender, 
            addresseer, 
            responseDocument);
        callback({document});
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
                        controlId="typeDocument"
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
                    <GetAddresseersSelect
                        errors={errors}
                        value={addresseer}
                        callback={setAddresseer} />
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
                        id="informAddresseer"
                        label="Informar al destinatario"
                        checked={informAddresseer}
                        onChange={e => setInformAddresseer(!informAddresseer)} />
                </Col>
                <Col sm="12">
                    <Button type="submit" className="mt-3 my-color my-border-none p-3 w-100">
                        Crear documento
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { CreateDocumentForm };