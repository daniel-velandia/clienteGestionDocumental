import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow, CTooltip } from "@coreui/react"
import { readStudents } from "../../connections/FakeApi/student";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { StudentCard } from "../../components/students/StudentCard";
import { StudentsNotFound } from "../../components/students/StudentsNotFound";

const StudentsList = () => {
    
    const location = useLocation();

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const studentsObtained = await readStudents();
            setStudents(studentsObtained);
        }

        fetchStudents();
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs={12} className="d-flex justify-content-between">
                    <h1 className="my-3">Estudiantes</h1>
                    <CTooltip
                        content="Crear estudiante"
                        placement="top"
                    >
                        <CButton 
                            component={NavLink}
                            to={"/students/create"}
                            color="danger"
                            shape="rounded-pill"
                            className="my-btn-add"
                        >
                            <CIcon icon={cilPlus} height={24} className="text-white"/>
                        </CButton>
                    </CTooltip>
                </CCol>
            </CRow>
            <CRow>
                {
                    students.length > 0 ? students.map(student => 
                            <StudentCard key={student.studentId} student={student} />) :
                            <StudentsNotFound />
                        
                }
            </CRow>
        </div>
    );
}

export default StudentsList;