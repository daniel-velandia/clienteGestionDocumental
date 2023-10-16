import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCompanyById } from "../../connections/FakeApi/company";
import CIcon from "@coreui/icons-react";
import { cilTrash } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";

const DeleteCompanyButton = ({company}) => {

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const deleteCompany = () => {
    deleteCompanyById(company.companyId);
    navigate("/companies");
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
          <CModalTitle id="LiveDemoExampleLabel">Eliminar compañia</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Estás seguro que quieres eliminar la compañia {company.companyName}?
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
              onClick={deleteCompany}
            >
              Si
            </CButton>
          </CModalFooter>
      </CModal>
    </div>
  );
}

export { DeleteCompanyButton };