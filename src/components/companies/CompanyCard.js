import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol } from "@coreui/react";
import { NavLink } from "react-router-dom";

const CompanyCard = ({company}) => {

    return (
        <CCol xs={12} sm={6} lg={3}>
            <CCard className="my-2 border-0 shadow-sm">
            <CCardBody>
                <CCardTitle className="text-truncate">
                    <CButton 
                        color="link"
                        component={NavLink}
                        to={`/companies/detail?q=${company.companyId}`}
                        className="my-card-title text-danger"
                    >
                        {company.companyName}
                    </CButton>
                </CCardTitle>
                <CCardSubtitle>
                    {company.senderName}
                </CCardSubtitle>
                <CCardText className="d-flex justify-content-end align-items-center mt-3">
                    <CBadge color="secondary">NIT {company.nit}</CBadge>
                </CCardText>
            </CCardBody>
            </CCard>
        </CCol>
    );
}

export { CompanyCard };