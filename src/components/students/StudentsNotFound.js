import {CCol, CImage} from "@coreui/react";
import studentsNotFound from "../../assets/images/student-not-found.png";

const StudentsNotFound = () => {

    return (
        <div className="d-flex justify-content-center w-100 my-h-img">
            <CCol xs="12" sm="4" className="text-center align-self-center">
                <CImage src={studentsNotFound} height={200} alt="no hay documentos" />
                <p className="lead">Parece que no hay estudiantes que mostrar</p>
            </CCol>
        </div>
    )
}

export { StudentsNotFound };