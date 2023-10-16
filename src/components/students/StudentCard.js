import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol } from "@coreui/react";
import { NavLink } from "react-router-dom";

const StudentCard = ({student}) => {

    return (
        <CCol md={6} lg={3}>
            <CCard>
            <CCardBody>
                <CCardTitle className="text-truncate">
                    <CButton 
                        color="link"
                        component={NavLink}
                        to={`/students/detail?q=${student.studentId}`}
                        className="my-card-title my-color-text-title"
                    >
                        {student.name} {student.lastName}
                    </CButton>
                </CCardTitle>
                <CCardSubtitle>
                    {`${student.career} - semestre ${student.semester}`}
                </CCardSubtitle>
                <CCardText className="d-flex justify-content-end align-items-center mt-2">
                    <CBadge color="danger"className="mx-1">D.I {student.identification}</CBadge>
                </CCardText>
            </CCardBody>
            </CCard>
        </CCol>
    );
}

export { StudentCard };