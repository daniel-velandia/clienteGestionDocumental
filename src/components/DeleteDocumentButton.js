import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteIcon from "../assets/images/delete.png";
import { deleteDocumentById } from "../FakeApi/document";
import { useNavigate } from "react-router-dom";

function DeleteDocumetButton({document}) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteDocument() {
    deleteDocumentById(document.documentId);
    navigate("/");
  }

  return (
    <>
      <Button variant="link" className="p-1" onClick={handleShow}>
        <img src={deleteIcon} alt="eliminar documento" />
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Eliminar documento</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas eliminar el documento {document.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button className="my-bg-red border-0" onClick={deleteDocument}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { DeleteDocumetButton };