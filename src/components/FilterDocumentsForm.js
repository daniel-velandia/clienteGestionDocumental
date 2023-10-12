import { useState } from 'react';
import { Button, Form, FloatingLabel, Modal } from "react-bootstrap";
import filterIcon from "../assets/images/filter.png";
import { useLocation } from 'react-router-dom';
import validator from 'validator';

function FilterDocumentsForm({callback}) {

    const location = useLocation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = () => {
        if(!validator.isEmpty(location.search)) {
            setShow(true);
        }
    };

    const [dateCreated, setDateCreated] = useState("");
    const [filter, setFilter] = useState("");

    const send = () => {
        handleClose();
        callback({dateCreated, filter});
    }

    return (
        <div>
            <div className='d-flex flex-row-reverse'>
                <Button className="my-3" variant="link" onClick={handleShow}>
                    <img src={filterIcon} alt='search' />
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='my-border-none' closeButton>
                    <Modal.Title>Filtros</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <FloatingLabel
                            controlId="dateCreated"
                            label="Fecha de creado"
                            className="mb-4">
                            <Form.Control 
                                placeholder="Fecha de creado"
                                type="date"
                                value={dateCreated}
                                onChange={e => setDateCreated(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="filter" label="Filtro" className="mb-4">
                            <Form.Select 
                                value={filter} 
                                onChange={e => setFilter(e.target.value)} >
                                <option value=''>Seleccione un filtro</option>
                                <option value='all'>Todos los radicados</option>
                                <option value='delivery'>Radicados de entrega</option>
                                <option value='reply'>Radicados de respuesta</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form>

                </Modal.Body>
                <Modal.Footer className='my-border-none'>
                    <Button className='my-color my-border-none' onClick={send}>
                        Aplicar filtros
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export { FilterDocumentsForm };