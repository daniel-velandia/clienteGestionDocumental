import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAddresseerById } from "../../connections/FakeApi/addresseer";
import CIcon from "@coreui/icons-react";
import { cilTrash } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";

const DeleteAddresseerButton = ({addresseer}) => {

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const deleteAddresseer = () => {
    deleteAddresseerById(addresseer.addresseerId);
    navigate("/addresseers");
  }

  return (
    <div>
      <CButton color="link" onClick={() => setVisible(!visible)}>
          <CIcon icon={cilTrash} size="xl" className="text-white"/>
      </CButton>
      <CModal
          visible={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Eliminar destinatario</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Estás seguro que quieres eliminar el destinatario {addresseer.name} {addresseer.lastName}?
        </CModalBody>
        <CModalFooter>
            <CButton 
              color="secondary"
              className='text-white' 
              onClick={() => setVisible(false)}
            >
              No
            </CButton>
            <CButton 
              color="danger"
              className='text-white' 
              onClick={deleteAddresseer}
            >
              Si
            </CButton>
          </CModalFooter>
      </CModal>
    </div>
  );
}

export { DeleteAddresseerButton };