import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { readAddresseers } from "../FakeApi/addresseer";

function GetAddresseersSelect({errors, value, callback}) {

    const [addresseers, setAddresseers] = useState([]);

    useEffect(() => {
        setAddresseers(readAddresseers());
    }, []);

    return (
        <FloatingLabel controlId="addresseers" label="Destinatario" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.addresseer}>
                <option value=''>Seleccione un destinatario</option>
                {
                    addresseers.map(addresseer => 
                    <option key={addresseer.identification} value={addresseer.addresseerId}>
                        {addresseer.identification} {addresseer.name} {addresseer.lastName}
                    </option>)
                }
            </Form.Select>
            <Form.Control.Feedback type='invalid'>
                {errors.addresseer}
            </Form.Control.Feedback>
        </FloatingLabel>
    );
}

export { GetAddresseersSelect };