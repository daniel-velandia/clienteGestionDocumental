import {CCol, CImage} from "@coreui/react";
import companiessNotFound from "../../assets/images/company-not-found.png";

const CompaniesNotFound = () => {

    return (
        <div className="d-flex justify-content-center w-100 my-h-img">
            <CCol xs="12" sm="4" className="text-center align-self-center">
                <CImage src={companiessNotFound} height={200} alt="no hay documentos" />
                <p className="lead">Parece que no hay compañias que mostrar</p>
            </CCol>
        </div>
    )
}

export { CompaniesNotFound };