import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow } from "@coreui/react"
import { readDocuments } from "../../connections/FakeApi/document";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { DocumentCard } from "../../components/documents/DocumentCard";
import { DocumentsNotFound } from "../../components/documents/DocumentsNotFound";

const DocumentsList = () => {
    
    const location = useLocation();

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        setDocuments(readDocuments());
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs="12" className="d-flex">
                    <h2 className="my-3">Documentos</h2>
                    <CButton 
                        component={NavLink}
                        to={`/documents/create`}
                        color="link"
                        className="mt-2 p-3"
                    >
                        <CIcon icon={cilPlus} height={24} className="text-danger"/>
                    </CButton>
                </CCol>
            </CRow>
            <CRow>
                {
                    documents.length > 0 ? documents.map(document => 
                        <DocumentCard key={document.documentId} document={document} />) :
                        <DocumentsNotFound />
                }
            </CRow>
        </div>
    );
}

export default DocumentsList;