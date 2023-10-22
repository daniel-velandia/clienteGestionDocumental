import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol } from "@coreui/react";
import { NavLink } from "react-router-dom";
import { VisualizeFileButton } from "./VisualizeFileButton";
import convertBytes from "../../utils/convertBytes";
import moment from "moment/moment";

const DocumentCard = ({document}) => {

    return (
        <CCol xs={12} sm={6} lg={3}>
            <CCard className="my-2 border-0 shadow-sm">
            <CCardBody>
                <CCardTitle className="text-truncate">
                    <CButton 
                        color="link"
                        component={NavLink}
                        to={`/documents/detail?q=${document.documentId}`}
                        className="my-card-title text-danger"
                    >
                        {document.name}
                    </CButton>
                </CCardTitle>
                <CCardSubtitle>
                    {`${convertBytes(document.size)} - ${moment(document.dateCreated).format('D[/]MM[/]YYYY')}`}
                </CCardSubtitle>
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <VisualizeFileButton documentId={document.documentId}/>
                        <CCardText>
                            <CBadge color="secondary">RAD {document.registrationNumber}</CBadge>
                        </CCardText>
                    </div>
                </div>
            </CCardBody>
            </CCard>
        </CCol>
    );
}

export { DocumentCard };