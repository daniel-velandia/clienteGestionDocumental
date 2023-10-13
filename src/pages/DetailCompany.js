import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { findCompanyById } from "../FakeApi/company";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import edit from "../assets/images/edit.png";
import { DeleteCompanyButton } from "../components/DeleteCompanyButton";

function DetailCompany() {

    const [company, setCompany] = useState({});
    const {id} = useParams();
    const location = useLocation();

    useEffect(() => {
        setCompany(findCompanyById(parseInt(id)));
    }, [id, location]);

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="5">
                    <Card className="my-border-none mt-4" bg="light">
                        <Card.Header className="d-flex justify-content-between">
                            <Card.Title as="h5" className="my-color-text-title my-2 me-2">
                                {company.nit} - {company.companyName}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="my-color-text-title mb-0">
                                Nombre de remitente
                            </Card.Text>
                            <Card.Text>
                                {company.senderName}
                            </Card.Text>
                            <Row>
                                <Col xs="12" sm="8" className="mb-3">
                                    <Card.Text className="my-color-text-title mb-0">
                                        correo
                                    </Card.Text>
                                    <Card.Text>
                                        {company.email}
                                    </Card.Text>
                                </Col>
                                <Col xs="12" sm="4" className="mb-3">
                                    <Card.Text className="my-color-text-title mb-0">
                                        Telefono
                                    </Card.Text>
                                    <Card.Text>
                                        {company.phone}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <div>
                                <Button as={NavLink} 
                                        to={`/editcompany/${company.companyId}`} 
                                        variant="link" 
                                        className="p-1">
                                    <img src={edit} alt="editar studiante" />
                                </Button>
                                <DeleteCompanyButton company={company} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export { DetailCompany };