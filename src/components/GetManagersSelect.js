import { useEffect, useState } from "react";
import { LIST_MANAGER_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetManagersSelect({errors, value, callback}) {

    const [managers, setManagers] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(LIST_MANAGER_GET_ENDPOINT)
    //     .then(response => {
    //         setManagers(response.data);
    //     }).catch(err => {
    //         navigate(-1);
    //     })
    // });

    return (
        <FloatingLabel controlId="managers" label="Encargado" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.manager}>
                <option value=''>Seleccione un encargado</option>
                {
                    managers.map(manager => 
                    <option key={manager.idManager} value={manager.idManager}>
                        {`${manager.identityCard} ${manager.name} ${manager.lastName}`}
                    </option>)
                }
            </Form.Select>
            <Form.Control.Feedback type='invalid'>
                {errors.manager}
            </Form.Control.Feedback>
        </FloatingLabel>
    );
}

export { GetManagersSelect };