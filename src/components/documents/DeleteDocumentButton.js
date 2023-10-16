import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDocumentById } from "../../connections/FakeApi/document";
import CIcon from "@coreui/icons-react";
import { cilTrash } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";

const DeleteDocumentButton = ({document}) => {

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const deleteDocument = () => {
    deleteDocumentById(document.documentId);
    navigate("/");
  }

  return (
    <div>
      <CButton color="link" onClick={() => setVisible(!visible)}>
          <CIcon icon={cilTrash} size="xl" className="text-danger"/>
      </CButton>
      <CModal
          visible={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Eliminar documento</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Estás seguro que quieres eliminar el documento {document.name}?
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
              onClick={deleteDocument}
            >
              Si
            </CButton>
          </CModalFooter>
      </CModal>
    </div>
  );
}

export { DeleteDocumentButton };