import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as={NavLink} to={"/"}>Gestion Documental</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={"/createstudent"}>Crear estudiante</Nav.Link>
                    <Nav.Link as={NavLink} to={"/createmanager"}>Crear encargado</Nav.Link>
                    <Nav.Link as={NavLink} to={"/createcompany"}>Crear empresa</Nav.Link>
                    <Nav.Link as={NavLink} to={"/createdocument"}>Crear documento</Nav.Link>
                </Nav>
                <Nav >
                    <Nav.Link as={NavLink} to={"/signup"}>Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to={"/signin"}>Iniciar sesión</Nav.Link>
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