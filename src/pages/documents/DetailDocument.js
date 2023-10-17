import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findDocumentById } from "../../connections/FakeApi/document";
import { DeleteDocumentButton } from "../../components/documents/DeleteDocumentButton";
import { CButton, CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CRow } from "@coreui/react";
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
        <CCol xs={12} sm={6}>
            {document && 
                <CCard>
                <CCardHeader className="bg-danger text-white">
                    <CRow className="align-items-center">
                    <CCol xs={12} lg={8}>
                        <h5 className="mb-0">{document.name}</h5>
                    </CCol>
                    <CCol xs={12} lg={4} className="d-flex justify-content-lg-end mt-3 mt-lg-0">
                        <CButton
                        component={NavLink}
                        to={`/documents/edit?q=${document.documentId}`}
                        color="linck"
                        >
                        <CIcon icon={cilPencil} size="xl" className="text-white" />
                        </CButton>
                        <DeleteDocumentButton document={document} />
                    </CCol>
                    </CRow>
                </CCardHeader>
                <CCardBody>
                    <CListGroup flush>
                    <CListGroupItem>
                        <strong>RAD:</strong> {document.registrationNumber}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Peso:</strong> {bytes(document.size)}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Fecha:</strong> {moment(document.dateCreated).format('D[/]MM[/]YYYY')}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Requiere respuesta:</strong> {document.requiresResponse ? "Si" : "No"}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Tipo de documento:</strong> {document.typeDocument}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Asunto:</strong> {document.subject}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Anexos:</strong> {document.annexes}
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Remitente:</strong> 
                            <CButton
                                component={NavLink}
                                to={
                                    document.studentSender ? 
                                        `/students/detail?q=${document.studentSender}` : 
                                        `/companies/detail?q=${document.companySender}`
                                }
                                className="text-decoration-none text-black my-link"
                                color="link"
                            >
                                {
                                    document.studentSender ? 
                                        document.studentSender : 
                                        document.companySender
                                }
                            </CButton>
                    </CListGroupItem>
                    <CListGroupItem>
                        <strong>Destinatario:</strong> 
                        <CButton
                            component={NavLink}
                            to={`/addresseers/detail?q=${document.addresseer}`}
                            className="text-decoration-none text-black my-link"
                            color="link"
                        >
                            {document.addresseer}
                        </CButton>
                    </CListGroupItem>
                    {
                        !document.typeRegistration &&
                            
                            <CListGroupItem>
                                <strong>Documento respondido:</strong> 
                                <CButton
                                    component={NavLink}
                                    to={`/documents/detail?q=${document.responseDocument}`}
                                    className="text-decoration-none text-black my-link"
                                    color="link"
                                >
                                    {document.responseDocument}
                                </CButton>
                            </CListGroupItem>
                    }
                    </CListGroup>
                </CCardBody>
                </CCard>
            }
        </CCol>
    </CRow>
    );
}

export default DetailDocument;