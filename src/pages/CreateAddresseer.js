import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CreateAddresseerForm } from "../components/CreateAddresseerForm"
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { createAddresseer } from "../FakeApi/addresseer";

function CreateAddresseer() {
    
    const [errors, setErrors] = useState({});

    async function create({addresseer}) {

        const error = {};

        if(validator.isEmpty(addresseer.identification)) {
            error.identification = "El documento de identidad no puede estar vacio"
        }

        if(validator.isEmpty(addresseer.name)) {
            error.name = "El nombre no puede estar vacio"
        }

        if(validator.isEmpty(addresseer.lastName)) {
            error.lastName = "El apellido no puede estar vacio"
        }

        if(validator.isEmpty(addresseer.email)) {
            error.email = "El correo no puede estar vacio"
        }

        if(validator.isEmpty(addresseer.phone)) {
            error.phone = "El telefono no puede estar vacio"
        }

        if(validator.isEmpty(addresseer.charge)) {
            error.charge = "El cargo no puede estar vacio"
        }

        if(validator.isEmpty(addresseer.area)) {
            error.area = "El area no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createAddresseer(addresseer);
        }
    };
    
    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <h2 className="my-3 text-center">Crear destinatario</h2>
                    <CreateAddresseerForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateAddresseer }