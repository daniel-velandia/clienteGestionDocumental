import validator from "validator";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { FilterDocumentsForm } from "../components/FilterDocumentsForm";
import { DocumentCard } from "../components/DocumentCard";
import { useLocation, useNavigate } from "react-router-dom";
import { readDocuments } from "../FakeApi/document";

function SearchDocuments() {
    
    const location = useLocation();
    const navigation = useNavigate();
    const [errors, setErrors] = useState({});

    const [documents, setDocuments] = useState([]);

    async function search({dateCreated, filter}) {

        const params = setParams(dateCreated, filter);
        navigation(`/?${params.toString()}`);
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

    useEffect(() => {
        setDocuments(readDocuments());
    }, [location])

    return (
        <Container className="mt-3 mb-3">
            <Row className="my-4">
                <Col sm="8">
                    <h2>Documentos encontrados</h2>
                </Col>
                <Col sm="4">
                    {errors.new && <Alert variant="danger">{errors.new}</Alert>}
                    <FilterDocumentsForm callback={search} />
                </Col>
            </Row>
            <Row>
                {
                    (documents.length > 0) && 
                        documents.map(document => <DocumentCard key={document.documentId} document={document} />)
                }
            </Row>
        </Container>
    );
}

export { SearchDocuments};