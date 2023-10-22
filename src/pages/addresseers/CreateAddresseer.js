import validator from "validator";
import { useState } from "react";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";
import { CreateAddresseerForm } from "../../components/addresseers/CreateAddresseerForm";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { createAddresseer } from "../../connections/FakeApi/addresseer";
import { useNavigate } from "react-router-dom";

const CreateAddresseer = () => {
    
    const [errors, setErrors] = useState({});
    const navigation = useNavigate();

    const create = ({addresseer}) => {

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
            createAddresseer(addresseer);
            navigation("/addresseers");
        }
    };
    
    return (
        <CRow className="justify-content-center mb-3">
            <CCol sm={12} md={10} lg={8} xl={7}>
                <CCard className="border-0 shadow-sm">
                    <CCardBody>
                        <CCardTitle component="h2" className="d-flex justify-content-center mb-4">
                            Crear destinatario
                        </CCardTitle>
                        <CreateAddresseerForm 
                            errors={errors} 
                            callback={create} 
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default CreateAddresseer;