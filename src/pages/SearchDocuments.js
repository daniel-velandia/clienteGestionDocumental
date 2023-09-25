import axios from "axios";
import validator from "validator";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { LIST_LAST_DOCUMENTS_ADDED_GET_ENDPOINT, 
    SEARCH_STUDENT_DOCUMENTS_GET_ENDPOINT, 
    SEARCH_COMPANY_DOCUMENTS_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { SearchDocumentsForm } from "../components/SearchDocumentsForm";
import { DocumentCard } from "../components/DocumentCard";

function SearchDocuments() {

    const [errors, setErrors] = useState({});
    const [documents, setDocuments] = useState([
        {
          idDocument: 1,
          name: "Documento 1",
          dateCreated: "2023-09-24",
          size: "2MB",
          subject: "Tema 1",
        },
        {
          idDocument: 2,
          name: "Documento 2",
          dateCreated: "2023-09-23",
          size: "1.5MB",
          subject: "Tema 2",
        },
        {
          idDocument: 3,
          name: "Documento 3",
          dateCreated: "2023-09-22",
          size: "3MB",
          subject: "Tema 3",
        },
        {
          idDocument: 4,
          name: "Documento 4",
          dateCreated: "2023-09-22",
          size: "3MB",
          subject: "Tema 4",
        }
      ]);
    const [endpoint, setEndpoint] = useState(LIST_LAST_DOCUMENTS_ADDED_GET_ENDPOINT);

    const search = async ({sender, senderType, dateCreated, filter}) => {

        if(!validator.isEmpty(sender)) {
            if(validator.isEmpty(senderType)) {
                setErrors({senderType: "Debe seleccionar el tipo de remitente"});
            } else  {

                let url = senderType === "Student" ? 
                    SEARCH_STUDENT_DOCUMENTS_GET_ENDPOINT : 
                    SEARCH_COMPANY_DOCUMENTS_GET_ENDPOINT;

                url += `?sender=${sender}`;

                if(!validator.isEmpty(dateCreated)) {
                    url += `&dateCreated=${dateCreated}`;
                }
        
                if(!validator.isEmpty(filter)) {
                    url += `&filter=${filter}`;
                }

                setErrors({});
                setEndpoint(url);

            }
        }    
    };

    // useEffect(() => {
    //     axios.get(endpoint)
    //     .then( response => {
    //         setDocuments(response.data);
    //     }).catch( err => {
    //         setErrors({new: err.response.data.message})
    //     });
    // }, [endpoint]);

    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6" className="mb-3">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <SearchDocumentsForm errors={errors} callback={search} />
                </Col>
            </Row>
            <Row>
                {
                    documents.map(document => <DocumentCard key={document.idDocument} document={document} />)
                }
            </Row>
        </Container>
    );
}

export { SearchDocuments };