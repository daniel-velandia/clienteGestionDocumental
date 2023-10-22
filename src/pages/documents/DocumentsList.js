import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow, CTooltip } from "@coreui/react"
import { readDocuments } from "../../connections/FakeApi/document";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { DocumentCard } from "../../components/documents/DocumentCard";
import { DocumentsNotFound } from "../../components/documents/DocumentsNotFound";

const DocumentsList = () => {
    
    const location = useLocation();

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            const documentsObtained = await readDocuments();
            setDocuments(documentsObtained);
        }

        fetchDocuments();
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs={12} className="d-flex justify-content-between">
                    <h1 className="my-3">Documentos</h1>
                    <CTooltip
                        content="Crear documento"
                        placement="top"
                    >
                        <CButton 
                            component={NavLink}
                            to={"/documents/create"}
                            color="danger"
                            shape="rounded-pill"
                            className="my-btn-add"
                        >
                            <CIcon icon={cilPlus} height={24} className="text-white"/>
                        </CButton>
                    </CTooltip>
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