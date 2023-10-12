import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteIcon from "../assets/images/delete.png";
import { deleteStudentById } from "../FakeApi/student";
import { useNavigate } from "react-router-dom";

function DeleteStudentButton({student}) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteStudent() {
    deleteStudentById(student.studentId);
    navigate("/");
  }

  return (
    <>
      <Button variant="link" className="p-1" onClick={handleShow}>
        <img src={deleteIcon} alt="eliminar estudiante" />
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Eliminar estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas eliminar el estudiante {student.name} {student.lastName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button className="my-bg-red border-0" onClick={deleteStudent}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { DeleteStudentButton };