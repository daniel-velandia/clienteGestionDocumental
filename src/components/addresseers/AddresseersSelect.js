import { useEffect, useState } from "react";
import { readAddresseers } from "../../connections/FakeApi/addresseer";
import { CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilAddressBook } from "@coreui/icons";

const AddresseersSelect = ({errors, addresseer, setAddresseer}) => {

    const [addresseers, setAddresseers] = useState([]);

    const fetchSelectArray = async () => {
        const addresseersObtained = await readAddresseers();

        const initialSelectArray = [
            { label: 'Seleccione un destinatario', value: '' }
        ];

        const addresseersArray = addresseersObtained.map(addresseer => (
            { 
                label: `${addresseer.identification} ${addresseer.name} ${addresseer.lastName}`, 
                value: addresseer.addresseerId
            }
        ));

        return initialSelectArray.concat(addresseersArray);
    }

    useEffect(() => {
        const fetchAddresseers = async () => {
            const addresseersObtained = await fetchSelectArray();
            setAddresseers(addresseersObtained);
        }
        
        fetchAddresseers();
    }, []);

    return (
        <CInputGroup className="mb-4">
            <CInputGroupText className="border-0">
                <CIcon icon={cilAddressBook} />
            </CInputGroupText>
                <CFormSelect 
                    id="addresseer"
                    feedbackInvalid={errors.addresseer}
                    invalid={errors.isAddresseerInvalid}
                    aria-label="destinatario"
                    options={addresseers}
                    value={addresseer}
                    onChange={e => setAddresseer(e.target.value)}
                />
        </CInputGroup>
    );
}

export { AddresseersSelect };