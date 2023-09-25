import axios from "axios";
import validator from "validator";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CREATE_MANAGER_POST_ENDPOINT } from "../connections/helpers/endpoints";
import { CreateManagerForm } from "../components/CreateManagerForm"
import { isEmptyObject } from "../connections/helpers/isEmptyObject";

function CreateManager() {
    
    const [errors, setErrors] = useState({});

    const create = async ({identification, name, lastName, username, email, phone, charge, area}) => {

        const error = {};

        if(validator.isEmpty(identification)) {
            error.identification = "El documento de identidad no puede estar vacio"
        }

        if(validator.isEmpty(name)) {
            error.name = "El nombre no puede estar vacio"
        }

        if(validator.isEmpty(lastName)) {
            error.lastName = "El apellido no puede estar vacio"
        }

        if(validator.isEmpty(username)) {
            error.username = "El username no puede estar vacio"
        }

        if(validator.isEmpty(email)) {
            error.email = "El correo no puede estar vacio"
        }

        if(validator.isEmpty(phone)) {
            error.phone = "El telefono no puede estar vacio"
        }

        if(validator.isEmpty(charge)) {
            error.charge = "El cargo no puede estar vacio"
        }

        if(validator.isEmpty(area)) {
            error.area = "El area no puede estar vacio"
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {

            console.log({identification, name, lastName, username, email, phone, charge, area});

            // axios.post(CREATE_MANAGER_POST_ENDPOINT, {identification, name, lastName, username, email, phone, charge, area})
            // .then( response => {
            //     
            // }).catch( err => {
            //     setErrors({new: err.response.data.message})
            // });
        }
    };
    
    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <CreateManagerForm errors={errors} callback={create} />
                </Col>
            </Row>
        </Container>
    );
}

export { CreateManager }