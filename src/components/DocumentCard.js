import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Download, Eye } from "react-bootstrap-icons";

function DocumentCard({document}) {

    return (
        <Col sm="12" md="6" lg="3" className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>
                        <Link className="text-decoration-none" to={`/document/${document.idDocument}`}>{document.name}</Link>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{`${document.dateCreated} ${document.size}`}</Card.Subtitle>
                    <Card.Text>{document.subject}</Card.Text>
                    <Card.Link href="#"><Download color="royalblue" size={24} /></Card.Link>
                    <Card.Link href="#"><Eye color="royalblue" size={24} /></Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export { DocumentCard };