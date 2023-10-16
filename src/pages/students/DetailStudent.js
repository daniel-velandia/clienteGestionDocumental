import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findStudentById } from "../../connections/FakeApi/student";
import { DeleteStudentButton } from "../../components/students/DeleteStudentButton";
import { CBadge, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

const DetailStudent = () => {

    const [student, setStudent] = useState(null);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get("q");
    
    useEffect(() => {
        setStudent(findStudentById(parseInt(query)));
    }, [query, location]);

    return (
        <CRow className="justify-content-center mb-4">
            <CCol sm={12} md={6} lg={4}>
                {
                    student &&
                        <CCard>
                        <CCardBody>
                            <CCardTitle className="my-color-text-title mb-3">
                                {student.name} {student.lastName}
                            </CCardTitle>
                            <CRow className="flex-column-reverse flex-sm-row">
                                <CCol xs={12} sm={8}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Estudio
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {student.career} - semestre {student.semester}
                                    </CCardText>
                                </CCol>
                                <CCol xs={12} sm={4} className="d-flex align-items-center justify-content-sm-end">
                                    <CBadge color="danger"className="mb-3 mx-1">D.I {student.identification}</CBadge>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs={12} sm={8}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Correo
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {student.email}
                                    </CCardText>
                                </CCol>
                                <CCol xs={12} sm={4}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Telefono
                                    </CCardText>
                                    <CCardText className="mb-3">
                                        {student.phone}
                                    </CCardText>
                                </CCol>
                            </CRow>
                            <div className="d-flex">
                                <CButton component={NavLink} 
                                        to={`/students/edit?q=${student.studentId}`} 
                                        color="link" >
                                    <CIcon icon={cilPencil} size="xl" className="text-danger"/>
                                </CButton>
                                <DeleteStudentButton student={student} />
                            </div>
                        </CCardBody>
                    </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default DetailStudent;