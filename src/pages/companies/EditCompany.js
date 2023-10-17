import validator from "validator";
import { useEffect, useState } from "react";
import { CCard, CCardBody, CCardTitle, CCol, CRow } from "@coreui/react";
import { CreateCompanyForm } from "../../components/companies/CreateCompanyForm";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { updateCompanyById, findCompanyById } from "../../connections/FakeApi/company";
import { useLocation, useNavigate } from "react-router-dom";

const EditCompany = () => {

    const [currentCompany, setCurrentCompany] = useState(null);
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const navigation = useNavigate();
    
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        setCurrentCompany(findCompanyById(parseInt(query)));
    }, [query, location])

    const edit = async ({company, cleanValues}) => {

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
            updateCompanyById(currentCompany.companyId, company);
            navigation("/companies");
        }
    };

    return (
        <CRow className="justify-content-center mb-3">
            <CCol sm={12} md={10} lg={8} xl={7}>
                {
                    currentCompany &&
                        <CCard>
                            <CCardBody>
                                <CCardTitle component="h2" className="d-flex justify-content-center mb-4">
                                    Editar compañia
                                </CCardTitle>
                                <CreateCompanyForm 
                                    errors={errors}
                                    callback={edit}
                                    currentCompanyName={currentCompany.companyName}
                                    currentNit={currentCompany.nit}
                                    currentEmail={currentCompany.email}
                                    currentPhone={currentCompany.phone}
                                    currentSenderName={currentCompany.senderName}
                                />
                            </CCardBody>
                        </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default EditCompany;
