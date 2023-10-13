import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { findDocumentById } from "../FakeApi/document";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import edit from "../assets/images/edit.png";
import { DownloadFileButton } from "../components/DownloadFileButton";
import { VisualizeFileButton } from "../components/VisualizeFileButton";
import { DeleteDocumetButton } from "../components/DeleteDocumentButton";

function DetailDocument() {

    const [document, setDocument] = useState({});
    const {id} = useParams();
    const location = useLocation();
    
    useEffect(() => {
        setDocument(findDocumentById(parseInt(id)));
    }, [id, location]);

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="5">
                    <Card className="my-border-none mt-4" bg="light">
                        <Card.Header className="d-flex justify-content-between">
                            <Card.Title as="h5" className="my-color-text-title my-2 me-2">
                                {document.name} - {document.typeDocument}
                            </Card.Title>
                            {
                                document.typeRegistration ?
                                <span className="my-badge my-badge-delivery h-100 align-self-center">
                                    Entrega
                                </span> :
                                <span className="my-badge my-badge-reply h-100 align-self-center">
                                    Respuesta
                                </span>
                            }
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {document.size} - {document.dateCreated}
                            </Card.Text>
                            <Card.Text className="my-color-text-title mb-0">
                                Asunto
                            </Card.Text>
                            <Card.Text>
                                {document.subject}
                            </Card.Text>
                            <Card.Text className="my-color-text-title mb-0">
                                Anexos
                            </Card.Text>
                            <Card.Text>
                                {document.annexes}
                            </Card.Text>
                            <Card.Text className="my-color-text-title mb-0">
                                Remitente
                            </Card.Text>
                            {
                                document.studentSender ?
                                <div className="mb-3">
                                    <Card.Text 
                                        as={NavLink} 
                                        to={`/student/${document.studentSender}`}
                                        className="text-decoration-none text-black">
                                            {document.studentSender}
                                    </Card.Text>
                                </div>: 
                                <div className="mb-3">
                                    <Card.Text 
                                        as={NavLink} 
                                        to={`/company/${document.companySender}`}
                                        className="text-decoration-none text-black">
                                            {document.companySender}
                                    </Card.Text>
                                </div>
                            }
                            <Card.Text className="my-color-text-title mb-0">
                                Destinatario
                            </Card.Text>
                            <div className="mb-3">
                                <Card.Text 
                                        as={NavLink} 
                                        to={`/addresseer/${document.addresseer}`} 
                                        className="text-decoration-none text-black">
                                    {document.addresseer}
                                </Card.Text>
                            </div>
                            {
                                !document.typeRegistration &&
                                    <div>
                                        <Card.Text className="my-color-text-title mb-0">
                                            Documento respondido
                                        </Card.Text>
                                        <div className="mb-3">
                                            <Card.Text 
                                                as={NavLink} 
                                                to={`/document/${document.responseDocument}`} 
                                                className="text-decoration-none text-black">
                                                {document.responseDocument}
                                            </Card.Text>
                                        </div>
                                    </div>
                            }
                            <div className="d-flex justify-content-between mt-2">
                                <div>
                                    <DownloadFileButton documentId={document.documentId}/>
                                    <VisualizeFileButton documentId={document.documentId}/>
                                    <Button as={NavLink} 
                                            to={`/editdocument/${document.documentId}`} 
                                            variant="link" 
                                            className="p-1">
                                        <img src={edit} alt="editar documento" />
                                    </Button>
                                    <DeleteDocumetButton document={document} />
                                </div>
                                <Card.Text className="mt-2">
                                    {document.registrationNumber}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export { DetailDocument };