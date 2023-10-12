import { Button } from "react-bootstrap";
import eye from "../assets/images/eye.png";
import { findDocumentById } from "../FakeApi/document";
import { useState } from "react";

function VisualizeFileButton({documentId}) {

    const [pdfUrl, setPdfUrl] = useState("");

    const visualizeFile = () => {
        const document = findDocumentById(documentId);
        setPdfUrl(URL.createObjectURL(document.file));
    };

    return (
        
        <Button onClick={visualizeFile} variant="link" className="p-1">
            <a href={pdfUrl} target="_blank"><img src={eye} alt="visualize"></img></a>
        </Button>
    );
}

export { VisualizeFileButton };