import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteIcon from "../assets/images/delete.png";
import { deleteCompanyById } from "../FakeApi/company";
import { useNavigate } from "react-router-dom";

function DeleteCompanyButton({company}) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteCompany() {
    deleteCompanyById(company.companyId);
    navigate("/");
  }

  return (
    <>
      <Button variant="link" className="p-1" onClick={handleShow}>
        <img src={deleteIcon} alt="eliminar compañia" />
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Eliminar compañia</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas eliminar la compañia {company.companyName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button className="my-bg-red border-0" onClick={deleteCompany}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { DeleteCompanyButton };