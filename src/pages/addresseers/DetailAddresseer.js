import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findAddresseerById } from "../../connections/FakeApi/addresseer";
import { DeleteAddresseerButton } from "../../components/addresseers/DeleteAddresseerButton";
import { CBadge, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

const DetailAddresseer = () => {

    const [addresseer, setAddresseer] = useState(null);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        
        setAddresseer(findAddresseerById(parseInt(query)));
        
    }, [query, location]);

    return (
        <CRow className="justify-content-center mb-4">
            <CCol sm={12} md={6} lg={4}>
                {
                    addresseer &&
                        <CCard>
                        <CCardBody>
                            <CCardTitle className="my-color-text-title mb-3">
                                {addresseer.name} {addresseer.lastName}
                            </CCardTitle>
                            <CRow className="flex-column-reverse flex-sm-row">
                                <CCol xs={12} sm={8}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Cargo
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {addresseer.charge} - area {addresseer.area}
                                    </CCardText>
                                </CCol>
                                <CCol xs={12} sm={4} className="d-flex align-items-center justify-content-sm-end">
                                    <CBadge color="danger"className="mb-3 mx-1">D.I {addresseer.identification}</CBadge>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs={12} sm={8}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Correo
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {addresseer.email}
                                    </CCardText>
                                </CCol>
                                <CCol xs={12} sm={4}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Telefono
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {addresseer.phone}
                                    </CCardText>
                                </CCol>
                            </CRow>
                            <div className="d-flex">
                                <CButton component={NavLink} 
                                        to={`/addresseers/edit?q=${addresseer.addresseerId}`} 
                                        color="link" >
                                    <CIcon icon={cilPencil} size="xl" className="text-danger"/>
                                </CButton>
                                <DeleteAddresseerButton addresseer={addresseer} />
                            </div>
                        </CCardBody>
                    </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default DetailAddresseer;