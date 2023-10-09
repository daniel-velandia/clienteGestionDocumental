import { Button } from "react-bootstrap";
import eye from "../assets/images/eye.png";

function VisualizeFileButton() {

    const visualizeFile = () => {

    };

    return (
        
        <Button onClick={visualizeFile} variant="link" className="p-1">
            <img src={eye} alt="visualize"></img>
        </Button>
    );
}

export { VisualizeFileButton };