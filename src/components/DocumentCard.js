import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { VisualizeFileButton } from "./VisualizeFileButton";
import { DownloadFileButton } from "./DownloadFileButton";

function DocumentCard({document}) {

    return (
        <Col sm="12" md="6" lg="3" className="mb-4">
            <Card className="my-border-none" bg="light">
                <Card.Body>
                    <div className="w-100 text-truncate">
                        <Card.Title as={NavLink} to={`/document/${document.documentId}`} 
                            className="text-decoration-none my-card-title my-color-text-title">
                            {document.name}
                        </Card.Title>
                    </div>
                    <Card.Subtitle className="my-2 text-muted">
                        {`${document.size} - ${document.dateCreated}`}
                    </Card.Subtitle>
                    <div className="d-flex justify-content-between mt-2">
                        <div>
                            <DownloadFileButton documentId={document.documentId}/>
                            <VisualizeFileButton documentId={document.documentId}/>
                        </div>
                        <Card.Text className="mt-2">
                            {document.registrationNumber}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export { DocumentCard };