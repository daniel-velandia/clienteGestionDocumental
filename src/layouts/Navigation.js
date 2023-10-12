import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import searchIcon from "../assets/images/search.png";
import logo from '../assets/images/logo.png';
import validator from 'validator';
import { useState } from 'react';

function Navigation() {

    const [sender, setSender] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();

        if (!validator.isEmpty(sender)) {
            navigate(`/?sender=${sender}`);
        } else {
            navigate("/");
        }
    }

    return (
        <Navbar expand="lg" fixed="top" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={NavLink} to={"/"}>
                    <img src={logo} className='my-logo' alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Row className='mx-md-2 mt-2 mt-md-0'>
                        <Col sm="12">
                            <Form onSubmit={search}>
                                <InputGroup>
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar"
                                        aria-label="Search"
                                        className='shadow-none'
                                        value={sender}
                                        onChange={e => setSender(e.target.value)}
                                    />
                                    <Button type="submit" variant="link">
                                        <img src={searchIcon} alt='search' />
                                    </Button>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={"/createstudent"}>Estudiante</Nav.Link>
                        <Nav.Link as={NavLink} to={"/createaddresseer"}>Destinatario</Nav.Link>
                        <Nav.Link as={NavLink} to={"/createcompany"}>Empresa</Nav.Link>
                        <Nav.Link as={NavLink} to={"/createdocument"}>Documento</Nav.Link>
                    </Nav>
                    <Nav >
                        <NavDropdown title="user" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={"/apppassword"}>Contraseña de aplicación</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to={"#"}>Cerrar sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export {Navigation};