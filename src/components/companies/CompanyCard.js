import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol } from "@coreui/react";
import { NavLink } from "react-router-dom";

const CompanyCard = ({company}) => {

    return (
        <CCol md={6} lg={3}>
            <CCard>
            <CCardBody>
                <CCardTitle className="text-truncate">
                    <CButton 
                        color="link"
                        component={NavLink}
                        to={`/companies/detail?q=${company.companyId}`}
                        className="my-card-title my-color-text-title"
                    >
                        {company.companyName}
                    </CButton>
                </CCardTitle>
                <CCardSubtitle>
                    {company.senderName}
                </CCardSubtitle>
                <CCardText className="d-flex justify-content-end align-items-center mt-2">
                    <CBadge color="danger"className="mx-1">NIT {company.nit}</CBadge>
                </CCardText>
            </CCardBody>
            </CCard>
        </CCol>
    );
}

export { CompanyCard };