import axios from "axios";
import validator from "validator";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { LIST_LAST_DOCUMENTS_ADDED_GET_ENDPOINT, 
    SEARCH_STUDENT_DOCUMENTS_GET_ENDPOINT, 
    SEARCH_COMPANY_DOCUMENTS_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { FilterDocumentsForm } from "../components/FilterDocumentsForm";
import { DocumentCard } from "../components/DocumentCard";
import { useLocation, useNavigate } from "react-router-dom";
import { GetAllDocuments } from "../FakeApi/document";
import { FilterStudentDocuments, GetAllStudents } from "../FakeApi/student";
import { FilterCompanyDocuments, GetAllCompanies } from "../FakeApi/company";

function SearchDocuments() {
    
    const location = useLocation();
    const navigation = useNavigate();
    const [errors, setErrors] = useState({});

    const [documents, setDocuments] = useState([]);

    async function search({dateCreated, filter}) {

        const params = setParams(dateCreated, filter);
        navigation(`/?${params.toString()}`);
    }

    function fetchDocuments() {
        if(validator.isEmpty(location.search)) {
            setDocuments(GetAllDocuments());
        } else {

            const params = new URLSearchParams(location.search);

            const sender = params.get('sender'); 
            const date = params.get('date');     
            const filter = params.get('filter');

            setDocuments(GetAllDocuments());
        }
    }
    
    function setParams(dateCreated, filter) {
        if(!validator.isEmpty(location.search)) {
            
            const newSearch = new URLSearchParams(location.search);
    
            if(!validator.isEmpty(dateCreated)) {
                newSearch.set("date", dateCreated);
            } else {
                newSearch.delete("date");
            }
    
            if(!validator.isEmpty(filter)) {
                newSearch.set("filter", filter);
            } else {
                newSearch.delete("filter");
            }
    
            return newSearch;
        } else {
            return new URLSearchParams("");
        }
    }
    
    function getDocuments (endpoint, params, callback) {
        axios.get(`${endpoint}${params}`)
        .then(response => {
            callback(response.data);
        })
        .catch(err => {
            setErrors({new: err.response.data.message});
        })
    }

    useEffect(() => {
        fetchDocuments();
    }, [location])

    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col className="mb-3">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <FilterDocumentsForm callback={search} />
                </Col>
            </Row>
            {
                (documents.length > 0) && 
                    <Row>
                        <h2 className="mt-3 mb-5 text-center">Últimos documentos agregados</h2>
                        {
                            documents.map(
                                    document => <DocumentCard key={document.documentId} document={document} />)
                        }
                    </Row>
            }
        </Container>
    );
}

export { SearchDocuments};