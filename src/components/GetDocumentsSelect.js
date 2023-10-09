import { useEffect, useState } from "react";
import { LIST_DOCUMENT_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { GetAllDocuments } from "../FakeApi/document";

function GetDocumentsSelect({errors, value, callback}) {

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
       setDocuments(GetAllDocuments());
    }, []);

    return (
        <FloatingLabel controlId="responseDocument" label="Documentos" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.responseDocument}>
                <option value=''>Seleccione un documento a responder</option>
                {
                    documents.map(document => 
                    <option key={document.documentId} value={document.documentId}>
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