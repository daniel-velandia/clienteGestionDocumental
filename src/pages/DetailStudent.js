import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { findStudentById } from "../FakeApi/student";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import edit from "../assets/images/edit.png";
import career from "../assets/images/career.png";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import { DeleteStudentButton } from "../components/DeleteStudentButton";

function DetailStudent() {

    const [student, setStudent] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        const student = findStudentById(parseInt(id));
        setStudent(student);
    });

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="5">
                    <Card className="my-border-none mt-4" bg="light">
                        <Card.Header className="d-flex justify-content-between">
                            <Card.Title as="h5" className="my-color-text-title my-2 me-2">
                                {student.identification} - {student.name} {student.lastName}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <div className="d-flex mb-1">
                                <img className="my-icon-card" src={career} alt="carrera estudiante" />
                                <Card.Text className="ms-2 align-self-center">
                                    {student.career} - semestre {student.semester}
                                </Card.Text>
                            </div>
                            <div className="d-flex mb-1">
                                <img className="my-icon-card" src={email} alt="correo estudiante" />
                                <Card.Text className="ms-2 align-self-center">
                                    {student.email}
                                </Card.Text>
                            </div>
                            <div className="d-flex mb-1">
                                <img className="my-icon-card" src={phone} alt="telefono estudiante" />
                                <Card.Text className="ms-2 align-self-center">
                                    {student.phone}
                                </Card.Text>
                            </div>
                            
                            <div>
                                <Button as={NavLink} 
                                        to={`/editstudent/${student.studentId}`} 
                                        variant="link" 
                                        className="p-1">
                                    <img src={edit} alt="editar studiante" />
                                </Button>
                                <DeleteStudentButton student={student} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export { DetailStudent };