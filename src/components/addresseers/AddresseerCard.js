import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol } from "@coreui/react";
import { NavLink } from "react-router-dom";

const AddresseerCard = ({addresseer}) => {

    return (
        <CCol xs={12} sm={6} lg={3}>
            <CCard className="my-2 border-0 shadow-sm">
            <CCardBody>
                <CCardTitle className="text-truncate">
                    <CButton 
                        color="link"
                        component={NavLink}
                        to={`/addresseers/detail?q=${addresseer.addresseerId}`}
                        className="my-card-title text-danger"
                    >
                        {addresseer.name} {addresseer.lastName}
                    </CButton>
                </CCardTitle>
                <CCardSubtitle>
                    {addresseer.charge} - area {addresseer.area}
                </CCardSubtitle>
                <CCardText className="d-flex justify-content-end align-items-center mt-3">
                    <CBadge color="secondary">D.I {addresseer.identification}</CBadge>
                </CCardText>
            </CCardBody>
            </CCard>
        </CCol>
    );
}

export { AddresseerCard };