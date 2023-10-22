import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findAddresseerById } from "../../connections/FakeApi/addresseer";
import { DeleteAddresseerButton } from "../../components/addresseers/DeleteAddresseerButton";
import { CButton, CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

const DetailAddresseer = () => {

    const [addresseer, setAddresseer] = useState(null);
    const location = useLocation();

    const id = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        const findAddresseer = async () => {
            const addresseerObtained = await findAddresseerById(id);
            setAddresseer(addresseerObtained);
        }
        
        findAddresseer();
    }, [id, location]);

    return (
    <CRow className="justify-content-center mb-4">
        <CCol xs={12} sm={4}>
        {addresseer && 
            <CCard className="border-0 shadow-sm">
            <CCardHeader className="bg-danger text-white">
                <CRow className="align-items-center">
                <CCol xs={12} lg={7}>
                    <h5 className="mb-0">{addresseer.name} {addresseer.lastName}</h5>
                </CCol>
                <CCol xs={12} sm={5} className="d-flex justify-content-sm-end mt-3 mt-sm-0">
                    <CButton
                    component={NavLink}
                    to={`/addresseers/edit?q=${addresseer.addresseerId}`}
                    color="linck"
                    >
                    <CIcon icon={cilPencil} size="xl" className="text-white" />
                    </CButton>
                    <DeleteAddresseerButton addresseer={addresseer} />
                </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <CListGroup flush>
                <CListGroupItem>
                    <strong>D.I:</strong> {addresseer.identification}
                </CListGroupItem>
                <CListGroupItem>
                    <strong>Cargo:</strong> {addresseer.charge}
                </CListGroupItem>
                <CListGroupItem>
                    <strong>Area:</strong> {addresseer.area}
                </CListGroupItem>
                <CListGroupItem>
                    <strong>Correo:</strong> {addresseer.email}
                </CListGroupItem>
                <CListGroupItem>
                    <strong>Teléfono:</strong> {addresseer.phone}
                </CListGroupItem>
                </CListGroup>
            </CCardBody>
            </CCard>
        }
        </CCol>
    </CRow>
    );
}

export default DetailAddresseer;