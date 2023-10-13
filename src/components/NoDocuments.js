import {Button, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import noDocumentsIcon from "../assets/images/no-document.png";

function NoDocuments() {

    return (

        <Row className="d-flex justify-content-center mt-3">
            <Col xs="12" sm="8" md="6" className="text-center">
                <img src={noDocumentsIcon} className="w-50" alt="no hay documentos" />
                <p className="lead">Parece que no hay documentos que mostrar</p>
            </Col>
        </Row>
        
    )
}

export {NoDocuments};