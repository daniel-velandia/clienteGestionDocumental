import { Button } from "react-bootstrap";
import download from "../assets/images/download.png";

function DownloadFileButton() {

    const DownloadFile = () => {

    };

    return (
        
        <Button onClick={DownloadFile} variant="link" className="p-1">
            <img src={download} alt="download"></img>
        </Button>
    );
}

export { DownloadFileButton };