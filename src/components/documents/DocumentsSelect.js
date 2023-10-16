import { useEffect, useState } from "react";
import { readDocuments } from "../../connections/FakeApi/document";
import { CFormLabel, CFormSelect } from "@coreui/react";

const DocumentsSelect = ({errors, document, setDocument}) => {

    const [documents, setDocuments] = useState([]);

    const getDocuments = (documentsObtained) => {

        const initialSelectArray = [
            { label: 'Seleccione un documento', value: '' }
        ];

        const documentsArray = documentsObtained.map(document => (
            { 
                label: `${document.registrationNumber} ${document.name}`, 
                value: document.documentId
            }
        ));

        return initialSelectArray.concat(documentsArray);
    }

    useEffect(() => {

        const documentsObtained = readDocuments();

        setDocuments(getDocuments(documentsObtained));

    }, []);

    return (
        <div>
            <CFormLabel htmlFor="document" className='mt-3'>
                Documentos
            </CFormLabel>
            <CFormSelect 
                id='document'
                feedbackInvalid={errors.ResponseDocument}
                invalid={errors.isResponseDocumentInvalid}
                aria-label="documento"
                options={documents}
                value={document}
                onChange={e => setDocument(e.target.value)}
            />
        </div>
    );
}

export { DocumentsSelect };