import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow } from "@coreui/react"
import { readAddresseers } from "../../connections/FakeApi/addresseer";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { AddresseerCard } from "../../components/addresseers/AddresseerCard";
import { AddresseersNotFound } from "../../components/addresseers/AddresseersNotFound";

const AddresseersList = () => {
    
    const location = useLocation();

    const [addresseers, setAddresseers] = useState([]);

    useEffect(() => {
        setAddresseers(readAddresseers());
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs="12" className="d-flex">
                    <h1 className="my-3">Destinatarios</h1>
                    <CButton 
                        component={NavLink}
                        to={`/addresseers/create`}
                        color="link"
                        className="h-100 d-flex align-items-center mt-1"
                    >
                        <CIcon icon={cilPlus} height={24} className="text-danger"/>
                    </CButton>
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