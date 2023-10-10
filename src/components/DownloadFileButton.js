import { Button } from "react-bootstrap";
import download from "../assets/images/download.png";
import { findDocumentById } from "../FakeApi/document";
import { saveAs } from "file-saver";

function DownloadFileButton({documentId}) {

    const DownloadFile = () => {
        const document = findDocumentById(documentId);
        saveAs(document.file, document.name);
    };

    return (
        
        <Button onClick={DownloadFile} variant="link" className="p-1">
            <img src={download} alt="download"></img>
        </Button>
    );
}

export { DownloadFileButton };