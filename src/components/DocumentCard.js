import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { VisualizeFileButton } from "./VisualizeFileButton";
import { DownloadFileButton } from "./DownloadFileButton";

function DocumentCard({document}) {

    return (
        <Col sm="12" md="6" lg="3" className="mb-4">
            <Card className="my-border-none shadow">
                <Card.Body>
                    <Card.Title as={NavLink} to={`/document/${document.documentId}`} className="text-decoration-none">
                        {document.name}
                    </Card.Title>
                    <Card.Subtitle className="my-2 text-muted">{`${document.size} - ${document.dateCreated}`}</Card.Subtitle>
                    <Row>
                        <Col>
                            <DownloadFileButton />
                            <VisualizeFileButton />
                        </Col>
                        <Col>
                            <Card.Text className="d-flex justify-content-end mt-2">
                                {document.registrationNumber}
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}

export { DocumentCard };