import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteIcon from "../assets/images/delete.png";
import { deleteAddresseerById } from "../FakeApi/addresseer";
import { useNavigate } from "react-router-dom";

function DeleteAddresseerButton({addresseer}) {

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteAddresseer() {
    deleteAddresseerById(addresseer.addresseerId);
    navigate("/");
  }

  return (
    <>
      <Button variant="link" className="p-1" onClick={handleShow}>
        <img src={deleteIcon} alt="eliminar destinatario" />
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Eliminar destinatario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas eliminar el destinatario {addresseer.name} {addresseer.lastName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button className="my-bg-red border-0" onClick={deleteAddresseer}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { DeleteAddresseerButton };