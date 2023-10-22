import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow, CTooltip } from "@coreui/react"
import { readAddresseers } from "../../connections/FakeApi/addresseer";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { AddresseerCard } from "../../components/addresseers/AddresseerCard";
import { AddresseersNotFound } from "../../components/addresseers/AddresseersNotFound";

const AddresseersList = () => {
    
    const location = useLocation();

    const [addresseers, setAddresseers] = useState([]);

    useEffect(() => {
        const fetchAddresseers = async () => {
            const addresseersObtained = await readAddresseers();
            setAddresseers(addresseersObtained);
        }

        fetchAddresseers();
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs={12} className="d-flex justify-content-between">
                    <h1 className="my-3">Destinatarios</h1>
                    <CTooltip
                        content="Crear destinatario"
                        placement="top"
                    >
                        <CButton 
                            component={NavLink}
                            to={"/addresseers/create"}
                            color="danger"
                            shape="rounded-pill"
                            className="my-btn-add"
                        >
                            <CIcon icon={cilPlus} height={24} className="text-white"/>
                        </CButton>
                    </CTooltip>
                </CCol>
            </CRow>
            <CRow>
                {
                    addresseers.length > 0 ? addresseers.map(addresseer => 
                            <AddresseerCard key={addresseer.addresseerId} addresseer={addresseer} />) :
                            <AddresseersNotFound />
                        
                }
            </CRow>
        </div>
    );
}

export default AddresseersList;