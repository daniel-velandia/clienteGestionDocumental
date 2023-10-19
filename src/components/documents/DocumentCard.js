import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol } from "@coreui/react";
import { NavLink } from "react-router-dom";
import { VisualizeFileButton } from "./VisualizeFileButton";
import convertBytes from "../../utils/convertBytes";
import moment from "moment/moment";

const DocumentCard = ({document}) => {

    return (
        <CCol md={6} lg={3}>
            <CCard className="my-2">
            <CCardBody>
                <CCardTitle className="text-truncate">
                    <CButton 
                        color="link"
                        component={NavLink}
                        to={`/documents/detail?q=${document.documentId}`}
                        className="my-card-title my-color-text-title"
                    >
                        {document.name}
                    </CButton>
                </CCardTitle>
                <CCardSubtitle>
                    {`${convertBytes(document.size)} - ${moment(document.dateCreated).format('D[/]MM[/]YYYY')}`}
                </CCardSubtitle>
                <CCardText>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <VisualizeFileButton documentId={document.documentId}/>
                    <CCardText>
                        <CBadge color="danger"className="mx-1">RAD {document.registrationNumber}</CBadge>
                    </CCardText>
                </div>
                </CCardText>
            </CCardBody>
            </CCard>
        </CCol>
    );
}

export { DocumentCard };