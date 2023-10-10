import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CreateAddresseeForm } from "../components/CreateAddresseeForm"
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { createAddresse } from "../FakeApi/addresse";

function CreateAddressee() {
    
    const [errors, setErrors] = useState({});

    async function create({addresse}) {

        const error = {};

        if(validator.isEmpty(addresse.identification)) {
            error.identification = "El documento de identidad no puede estar vacio"
        }

        if(validator.isEmpty(addresse.name)) {
            error.name = "El nombre no puede estar vacio"
        }

        if(validator.isEmpty(addresse.lastName)) {
            error.lastName = "El apellido no puede estar vacio"
        }

        if(validator.isEmpty(addresse.email)) {
            error.email = "El correo no puede estar vacio"
        }

        if(validator.isEmpty(addresse.phone)) {
            error.phone = "El telefono no puede estar vacio"
        }

        if(validator.isEmpty(addresse.charge)) {
            error.charge = "El cargo no puede estar vacio"
        }

        if(validator.isEmpty(addresse.area)) {
            error.area = "El area no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createAddresse(addresse);
        }
    };
    
    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <h2 className="my-3 text-center">Crear destinatario</h2>
                    <CreateAddresseeForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateAddressee }