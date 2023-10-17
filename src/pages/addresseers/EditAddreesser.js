import validator from "validator";
import { useEffect, useState } from "react";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";
import { CreateAddresseerForm } from "../../components/addresseers/CreateAddresseerForm";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { updateAddresseerById, findAddresseerById } from "../../connections/FakeApi/addresseer";
import { useLocation, useNavigate } from "react-router-dom";

const EditAddresseer = () => {

    const [currentAddresseer, setCurrentAddresseer] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const navigation = useNavigate();
    
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        setCurrentAddresseer(findAddresseerById(parseInt(query)));
    }, [query, location])

    const edit = ({addresseer, cleanValues}) => {

        const error = {};

        if(validator.isEmpty(addresseer.identification)) {
            error.identification = "El documento de identidad no puede estar vacio";
            error.isIdentificationInvalid = true;
        }

        if(validator.isEmpty(addresseer.name)) {
            error.name = "El nombre no puede estar vacio";
            error.isNameInvalid = true;
        }

        if(validator.isEmpty(addresseer.lastName)) {
            error.lastName = "El apellido no puede estar vacio";
            error.isLastNameInvalid = true;
        }

        if(validator.isEmpty(addresseer.email)) {
            error.email = "El correo no puede estar vacio";
            error.isEmailInvalid = true;
        }

        if(validator.isEmpty(addresseer.phone)) {
            error.phone = "El telefono no puede estar vacio";
            error.isPhoneInvalid = true;
        }

        if(validator.isEmpty(addresseer.charge)) {
            error.charge = "El cargo no puede estar vacio";
            error.isChargeInvalid = true;
        }

        if(validator.isEmpty(addresseer.area)) {
            error.area = "El area no puede estar vacio";
            error.isAreaInvalid = true;
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            updateAddresseerById(currentAddresseer.addresseerId, addresseer);
            navigation("/addresseers");
        }
    };

    return (
        <CRow className="justify-content-center mb-3">
            <CCol sm={12} md={10} lg={8} xl={7}>
                {
                    currentAddresseer &&
                        <CCard>
                            <CCardBody>
                                <CCardTitle component="h2" className="d-flex justify-content-center mb-4">
                                    Editar destinatario
                                </CCardTitle>
                                <CreateAddresseerForm 
                                    errors={errors}
                                    callback={edit}
                                    currentIdentification={currentAddresseer.identification}
                                    currentName={currentAddresseer.name}
                                    currentLastName={currentAddresseer.lastName}
                                    currentEmail={currentAddresseer.email}
                                    currentPhone={currentAddresseer.phone}
                                    currentCharge={currentAddresseer.charge}
                                    currentArea={currentAddresseer.area}
                                />
                            </CCardBody>
                        </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default EditAddresseer;
