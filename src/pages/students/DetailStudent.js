import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findStudentById } from "../../connections/FakeApi/student";
import { DeleteStudentButton } from "../../components/students/DeleteStudentButton";
import { CButton, CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

const DetailStudent = () => {

    const [student, setStudent] = useState(null);
    const location = useLocation();

    const id = new URLSearchParams(location.search).get("q");
    
    useEffect(() => {
        const findStudent = async () => {
            const studentObtained = await findStudentById(id);
            setStudent(studentObtained);
        }

        findStudent();
    }, [id, location]);

    return (
        <CRow className="justify-content-center mb-4">
            <CCol xs={12} sm={4}>
            {student && 
                <CCard className="border-0 shadow-sm">
                <CCardHeader className="bg-danger text-white">
                    <CRow className="align-items-center">
                    <CCol xs={12} sm={7}>
                        <h5 className="mb-0">{student.name} {student.lastName}</h5>
                    </CCol>
                    <CCol xs={12} sm={5} className="d-flex justify-content-sm-end mt-3 mt-sm-0">
                        <CButton
                        component={NavLink}
                        to={`/students/edit?q=${student.studentId}`}
                        color="linck"
                        >
                        <CIcon icon={cilPencil} size="xl" className="text-white" />
                        </CButton>
                        <DeleteStudentButton student={student} />
                    </CCol>
                    </CRow>
                </CCardHeader>
                <CCardBody>
                    <CListGroup flush>
                    <CListGroupItem>
                        <strong>D.I:</strong> {student.identification}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Carrera:</strong> {student.career}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Semestre:</strong> {student.semester}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Correo:</strong> {student.email}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Teléfono:</strong> {student.phone}
                    </CListGroupItem>
                    </CListGroup>
                </CCardBody>
                </CCard>
            }
            </CCol>
        </CRow>
    );
}

export default DetailStudent;