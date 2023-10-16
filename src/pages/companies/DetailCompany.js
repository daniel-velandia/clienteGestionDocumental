import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findCompanyById } from "../../connections/FakeApi/company";
import { DeleteCompanyButton } from "../../components/companies/DeleteCompanyButton";
import { CBadge, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

const DetailCompany = () => {

    const [company, setCompany] = useState(null);
    const location = useLocation();
    
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        setCompany(findCompanyById(parseInt(query)));
    }, [query, location]);

    return (
        <CRow className="justify-content-center mb-4">
            <CCol sm={12} md={6} lg={4}>
                {
                    company &&
                        <CCard>
                        <CCardBody>
                            <CCardTitle className="my-color-text-title mb-3">
                                {company.companyName}
                            </CCardTitle>
                            <CRow className="flex-column-reverse flex-sm-row">
                                <CCol xs={12} sm={8}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Remitente
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {company.senderName}
                                    </CCardText>
                                </CCol>
                                <CCol xs={12} sm={4} className="d-flex align-items-center justify-content-sm-end">
                                    <CBadge color="danger"className="mb-3 mx-1">NIT {company.nit}</CBadge>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs={12} sm={8}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Correo
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {company.email}
                                    </CCardText>
                                </CCol>
                                <CCol xs={12} sm={4}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Telefono
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {company.phone}
                                    </CCardText>
                                </CCol>
                            </CRow>
                            <div className="d-flex">
                                <CButton component={NavLink} 
                                        to={`/companies/edit?q=${company.companyId}`} 
                                        color="link" >
                                    <CIcon icon={cilPencil} size="xl" className="text-danger"/>
                                </CButton>
                                <DeleteCompanyButton company={company} />
                            </div>
                        </CCardBody>
                    </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default DetailCompany;