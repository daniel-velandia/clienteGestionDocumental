import { useEffect, useState } from "react";
import { readAddresseers } from "../../connections/FakeApi/addresseer";
import { CFormLabel, CFormSelect } from "@coreui/react";

const AddresseersSelect = ({errors, addresseer, setAddresseer}) => {

    const [addresseers, setAddresseers] = useState([]);

    const getAddresseers = (addresseersObtained) => {

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

        const addresseersObtained = readAddresseers();

        setAddresseers(getAddresseers(addresseersObtained));

    }, []);

    return (
        <div>
            <CFormLabel htmlFor="addresseer" className='mt-3'>
                Destinatarios
            </CFormLabel>
            <CFormSelect 
                id='addresseer'
                feedbackInvalid={errors.addresseer}
                invalid={errors.isAddresseerInvalid}
                aria-label="destinatario"
                options={addresseers}
                value={addresseer}
                onChange={e => setAddresseer(e.target.value)}
            />
        </div>
    );
}

export { AddresseersSelect };