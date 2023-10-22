import {CCol, CImage} from "@coreui/react";
import addresseersNotFound from "../../assets/images/addresseer-not-found.png";

const AddresseersNotFound = () => {

    return (
        <div className="d-flex justify-content-center w-100 my-h-img">
            <CCol xs={12} sm={4} className="text-center align-self-center">
                <CImage src={addresseersNotFound} height={200} alt="no hay destinatarios" />
                <p className="lead">Parece que no hay destinatarios que mostrar</p>
            </CCol>
        </div>
    )
}

export { AddresseersNotFound };