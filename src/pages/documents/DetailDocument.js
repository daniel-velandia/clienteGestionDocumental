import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findDocumentById } from "../../connections/FakeApi/document";
import { DeleteDocumentButton } from "../../components/documents/DeleteDocumentButton";
import { CBadge, CButton, CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";
import moment from "moment";
import bytes from "../../utils/bytes";

const DetailDocument = () => {

    const [document, setDocument] = useState(null);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        setDocument(findDocumentById(parseInt(query)));
    }, [query, location]);

    return (
        <CRow className="justify-content-center mb-4">
            <CCol sm={12} md={8} lg={5}>
                {
                    document &&
                        <CCard>
                        <CCardBody>
                            <CCardTitle className="my-color-text-title mb-3">
                                {document.name} - {document.typeDocument}
                            </CCardTitle>
                            <CRow className="flex-column-reverse flex-sm-row">
                                <CCol xs={12} sm={6}>
                                    <CCardSubtitle className="mb-3">
                                        {bytes(document.size)} - {moment(document.dateCreated).format('D[/]MM[/]YYYY')}
                                    </CCardSubtitle>
                                </CCol>
                                <CCol xs={12} sm={6} className="d-flex align-items-baseline justify-content-sm-end">
                                    <CBadge color="danger"className="mb-3 mx-1">RAD {document.registrationNumber}</CBadge>
                                    {
                                        document.typeRegistration ? 
                                        <CBadge color="success" className="mb-3 mx-1">Entrega</CBadge> : 
                                        <CBadge color="success" className="mb-3 mx-1">Respuesta</CBadge>
                                    }
                                </CCol>
                            </CRow>
                            <CCardText className="my-color-text-title mb-0">
                                Asunto
                            </CCardText>
                            <CCardText className="mb-3">
                                {document.subject}
                            </CCardText>
                            <CCardText className="my-color-text-title mb-0">
                                Anexos
                            </CCardText>
                            <CCardText className="mb-3">
                                {document.annexes}
                            </CCardText>
                            <CRow>
                                <CCol xs={12} sm={6}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Remitente
                                    </CCardText>
                                    {
                                        document.studentSender ?
                                            <CButton
                                                component={NavLink}
                                                to={`/students/detail?q=${document.studentSender}`}
                                                className="mb-3 text-decoration-none text-black p-0"
                                                color="link"
                                            >
                                                {document.studentSender}
                                            </CButton> :
                                            <CButton
                                                component={NavLink}
                                                to={`/companies/detail?q=${document.companySender}`}
                                                className="mb-3 text-decoration-none text-black p-0"
                                                color="link"
                                            >
                                                {document.companySender}
                                            </CButton>
                                    }
                                </CCol>
                                <CCol xs={12} sm={6}>
                                    <CCardText className="my-color-text-title mb-0">
                                        Destinatario
                                    </CCardText>
                                    <CButton
                                        component={NavLink}
                                        to={`/addresseers/detail?q=${document.addresseer}`}
                                        className="mb-3 text-decoration-none text-black p-0"
                                        color="link"
                                    >
                                        {document.addresseer}
                                    </CButton>
                                </CCol>
                            </CRow>
                            {
                                !document.typeRegistration &&
                                <div>
                                    <CCardText className="my-color-text-title mb-0">
                                        Documento de entrega
                                    </CCardText>
                                    <CButton
                                        component={NavLink}
                                        to={`/documents/detail?q=${document.responseDocument}`}
                                        className="mb-3 text-decoration-none text-black p-0"
                                        color="link"
                                    >
                                        {document.responseDocument}
                                    </CButton>
                                </div>
                            }
                            <div className="d-flex">
                                <CButton component={NavLink}
                                        to={`/documents/edit?q=${document.documentId}`}
                                        color="link">
                                    <CIcon icon={cilPencil} size="xl" className="text-danger"/>
                                </CButton>
                                <DeleteDocumentButton document={document} />
                            </div>
                        </CCardBody>
                    </CCard>
                }
            </CCol>
        </CRow>
    );
}

export default DetailDocument;