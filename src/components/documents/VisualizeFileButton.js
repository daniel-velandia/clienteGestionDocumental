import { CButton } from "@coreui/react";
import { findDocumentById } from "../../connections/FakeApi/document";
import { useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilLowVision } from "@coreui/icons";

const VisualizeFileButton = ({documentId}) => {

    const [pdfUrl, setPdfUrl] = useState("");

    const visualizeFile = async () => {
        const document = await findDocumentById(documentId);
        const blobUrl = URL.createObjectURL(document.file);
        setPdfUrl(blobUrl);
    };

    return (
        <CButton 
            onClick={visualizeFile} 
            color="link"
            >
            <a 
                href={pdfUrl} 
                target="_blank"
                rel="noopener noreferrer"
            >
                <CIcon icon={cilLowVision} size="xl" className="text-danger" />
            </a>
        </CButton>
    );
}

export { VisualizeFileButton };