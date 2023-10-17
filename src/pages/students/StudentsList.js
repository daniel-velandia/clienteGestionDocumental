import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CButton, CCol, CRow } from "@coreui/react"
import { readStudents } from "../../connections/FakeApi/student";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { StudentCard } from "../../components/students/StudentCard";
import { StudentsNotFound } from "../../components/students/StudentsNotFound";

const StudentsList = () => {
    
    const location = useLocation();

    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(readStudents());
    }, [location])

    return (
        <div className="mb-3">
            <CRow>
                <CCol xs="12" className="d-flex">
                    <h1 className="my-3">Estudiantes</h1>
                    <CButton 
                        component={NavLink}
                        to={`/students/create`}
                        color="link"
                        className="h-100 d-flex align-items-center mt-1"
                    >
                        <CIcon icon={cilPlus} height={24} className="text-danger"/>
                    </CButton>
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