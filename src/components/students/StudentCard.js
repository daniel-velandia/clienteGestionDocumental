import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol } from "@coreui/react";
import { NavLink } from "react-router-dom";

const StudentCard = ({student}) => {

    return (
        <CCol xs={12} sm={4} lg={3}>
            <CCard className="my-2 border-0 shadow-sm">
            <CCardBody>
                <CCardTitle className="text-truncate">
                    <CButton 
                        color="link"
                        component={NavLink}
                        to={`/students/detail?q=${student.studentId}`}
                        className="my-card-title text-danger"
                    >
                        {student.name} {student.lastName}
                    </CButton>
                </CCardTitle>
                <CCardSubtitle>
                    {`${student.career} - semestre ${student.semester}`}
                </CCardSubtitle>
                <CCardText className="d-flex justify-content-end align-items-center mt-3">
                    <CBadge color="secondary">D.I {student.identification}</CBadge>
                </CCardText>
            </CCardBody>
            </CCard>
        </CCol>
    );
}

export { StudentCard };