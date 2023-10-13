import { useState } from "react";
import { Button, Col, Form, FloatingLabel, Row } from "react-bootstrap";
import { Student } from "../models/Student";

function CreateStudentForm({
                    errors, 
                    callback, 
                    currentIdentification = "",
                    currentName = "",
                    currentLastName = "",
                    currentEmail = "",
                    currentPhone = "",
                    currentCareer = "",
                    currentSemester = ""}) {

    const [identification, setIdentification] = useState(currentIdentification);
    const [name, setName] = useState(currentName);
    const [lastName, setLastName] = useState(currentLastName);
    const [email, setEmail] = useState(currentEmail);
    const [phone, setPhone] = useState(currentPhone);
    const [career, setCareer] = useState(currentCareer);
    const [semester, setSemester] = useState(currentSemester);

    const send = (e) => {
        e.preventDefault();
        const student = new Student(identification, name, lastName, email, phone, career, semester);
        callback({student});
    }

    return (
        <Form onSubmit={send}>
            <Row>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="identification"
                        label="documento de identidad"
                        className="mt-3 mb-4">
                        <Form.Control 
                            placeholder="documento de identidad"
                            type="number"
                            value={identification}
                            onChange={e => setIdentification(e.target.value)}
                            isInvalid={errors.identification} />
                        <Form.Control.Feedback type="invalid">
                            {errors.identification}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="name"
                        label="Nombre"
                        className="mt-md-3 mb-4">
                        <Form.Control 
                            placeholder="Nombre"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            isInvalid={errors.name} />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="lastName"
                        label="Apellido"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Apellido"
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            isInvalid={errors.lastName} />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="email"
                        label="Correo"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Correo"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            isInvalid={errors.email} />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="phone"
                        label="Telefono"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Telefono"
                            type="number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            isInvalid={errors.phone} />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel controlId="career" label="Carrera" className="mb-4">
                        <Form.Select 
                            value={career} 
                            onChange={e => setCareer(e.target.value)} 
                            isInvalid={errors.career}>
                            <option value=''>Seleccione una carrera</option>
                            <option value='Diseño gráfico'>Diseño gráfico</option>
                            <option value='Administración de empresas'>Administración de empresas</option>
                            <option value='Hoteleria y turismo'>Hoteleria y turismo</option>
                            <option value='Ingenieria de software'>Ingenieria de software</option>
                            <option value='Negocios internacionales'>Negocios internacionales</option>
                            <option value='Administración financiera'>Administración financiera</option>
                            <option value='Negocios internacionales distancia'>Negocios internacionales distancia</option>
                            <option value='Gestión logístaca empresarial'>Gestión logístaca empresarial</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                            {errors.career}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col md="6" xs="12">
                    <FloatingLabel
                        controlId="semester"
                        label="Semestre"
                        className="mb-4">
                        <Form.Control 
                            placeholder="Semestre"
                            type="number"
                            value={semester}
                            onChange={e => setSemester(e.target.value)}
                            isInvalid={errors.semester} 
                            min={1}
                            max={10} />
                        <Form.Control.Feedback type="invalid">
                            {errors.semester}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Col>
                <Col sm="12">
                    <Button type="submit" className="mt-3 my-color my-border-none p-3 w-100">
                        Crear estudiante
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export { CreateStudentForm };