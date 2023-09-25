import { useEffect, useState } from "react";
import { LIST_DOCUMENT_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetDocumentsSelect({errors, value, callback}) {

    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(LIST_DOCUMENT_GET_ENDPOINT)
    //     .then(response => {
    //         setDocuments(response.data);
    //     }).catch(err => {
    //         navigate(-1);
    //     })
    // });

    return (
        <FloatingLabel controlId="responseDocument" label="Documentos" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.responseDocument}>
                <option value=''>Seleccione un documento a responder</option>
                {
                    documents.map(document => 
                    <option key={document.idDocument} value={document.idDocument}>
                        {`${document.registrationNumber} ${document.name} ${document.size}`}
                    </option>)
                }
            </Form.Select>
            <Form.Control.Feedback type='invalid'>
                {errors.responseDocument}
            </Form.Control.Feedback>
        </FloatingLabel>
    );
}

export { GetDocumentsSelect };