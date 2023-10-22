import { useEffect, useState } from "react";
import { readDocuments } from "../../connections/FakeApi/document";
import { CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilFile } from "@coreui/icons";

const DocumentsSelect = ({errors, document, setDocument}) => {

    const [documents, setDocuments] = useState([]);

    const fetchSelectArray = async () => {
        const documentsObtained = await readDocuments();

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
        const fetchDocuments = async () => {
            const documentsObtained = await fetchSelectArray();
            setDocuments(documentsObtained);
        }

        fetchDocuments();
    }, []);

    return (
        <div>
        <CInputGroup className="mb-4">
            <CInputGroupText className="border-0 shadow-sm">
                <CIcon icon={cilFile} />
            </CInputGroupText>
                <CFormSelect 
                    id="responseDocument"
                    feedbackInvalid={errors.ResponseDocument}
                    invalid={errors.isResponseDocumentInvalid}
                    aria-label="documento"
                    options={documents}
                    value={document}
                    onChange={e => setDocument(e.target.value)}
                />
        </CInputGroup>
        </div>
    );
}

export { DocumentsSelect };