import {CCol, CImage} from "@coreui/react";
import documentsNotFound from "../../assets/images/document-not-found.png";

const DocumentsNotFound = () => {

    return (

        <div className="d-flex justify-content-center w-100 my-h-img">
            <CCol xs={12} sm={4} className="text-center align-self-center">
                <CImage src={documentsNotFound} height={200} alt="no hay documentos" />
                <p className="lead">Parece que no hay documentos que mostrar</p>
            </CCol>
        </div>
        
    )
}

export { DocumentsNotFound };