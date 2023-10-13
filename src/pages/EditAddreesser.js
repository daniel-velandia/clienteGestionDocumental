import validator from "validator";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CreateAddresseerForm } from "../components/CreateAddresseerForm";
import { findAddresseerById, updateAddresseerById } from "../FakeApi/addresseer";
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import { useLocation, useParams } from "react-router-dom";

function EditAddresseer() {

    const {id} = useParams();
    const [currentAddresseer, setCurrentAddresseer] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();

    useEffect(() => {
        setCurrentAddresseer(findAddresseerById(parseInt(id)));
    }, [id, location])

    async function edit({addresseer}) {

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
            updateAddresseerById(currentAddresseer.addresseerId, addresseer);
            setErrors({});
        }
    };

    return (
        <Container className="my-mt-container mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <h2 className="my-3 text-center">Editar destinatario</h2>
                    {
                        currentAddresseer &&
                            <CreateAddresseerForm
                                errors={errors}
                                callback={edit}
                                currentIdentification={currentAddresseer.identification}
                                currentName={currentAddresseer.name}
                                currentLastName={currentAddresseer.lastName}
                                currentEmail={currentAddresseer.email}
                                currentPhone={currentAddresseer.phone}
                                currentCharge={currentAddresseer.charge}
                                currentArea={currentAddresseer.area} />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export { EditAddresseer };
