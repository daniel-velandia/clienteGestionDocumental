import validator from "validator";
import { useState } from "react";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";
import { CreateCompanyForm } from "../../components/companies/CreateCompanyForm";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { createCompany } from "../../connections/FakeApi/company";
import { toast } from "react-toastify";

const CreateCompany = () => {

    const [errors, setErrors] = useState({});

    const create = async ({company, cleanValues}) => {

        const error = {};

        if(validator.isEmpty(company.companyName)) {
            error.companyName = "El nombre de la empresa no puede estar vacio"
            error.isCompanyNameInvalid = true;
        }

        if(validator.isEmpty(company.nit)) {
            error.nit = "El nit no puede estar vacio"
            error.isNitInvalid = true;
        }

        if(validator.isEmpty(company.email)) {
            error.email = "El correo no puede estar vacio"
            error.isEmailInvalid = true;
        }

        if(validator.isEmpty(company.phone)) {
            error.phone = "El telefono no puede estar vacio"
            error.isPhoneInvalid = true;
        }

        if(validator.isEmpty(company.senderName)) {
            error.senderName = "El nombre del remitente no puede estar vacio"
            error.isSenderNameInvalid = true;
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {
            createCompany(company);

            toast.info(`Empresa ${company.companyName} creada con exito`, {
                position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000
            });

            setErrors({});
            cleanValues();
            
        }
    };

    return (
        <CRow className="justify-content-center mb-3">
            <CCol sm={12} md={10} lg={8} xl={7}>
                <CCard>
                    <CCardBody>
                        <CCardTitle component="h2" className="d-flex justify-content-center mb-4">
                            Crear Compañia
                        </CCardTitle>
                        <CreateCompanyForm 
                            errors={errors} 
                            callback={create} 
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default CreateCompany;