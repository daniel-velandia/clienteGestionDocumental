import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { readAddresses } from "../FakeApi/addresse";

function GetAddresseersSelect({errors, value, callback}) {

    const [addressees, setAddressees] = useState([]);

    useEffect(() => {
        setAddressees(readAddresses());
    }, []);

    return (
        <FloatingLabel controlId="addressees" label="Encargado" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.addressee}>
                <option value=''>Seleccione un destinatario</option>
                {
                    addressees.map(addressee => 
                    <option key={addressee.addresseeId} value={addressee.addresseeId}>
                        {`${addressee.identification} ${addressee.name} ${addressee.lastName}`}
                    </option>)
                }
            </Form.Select>
            <Form.Control.Feedback type='invalid'>
                {errors.addressee}
            </Form.Control.Feedback>
        </FloatingLabel>
    );
}

export { GetAddresseersSelect };