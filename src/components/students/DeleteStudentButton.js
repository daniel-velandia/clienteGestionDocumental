import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteStudentById } from "../../connections/FakeApi/student";
import CIcon from "@coreui/icons-react";
import { cilTrash } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";

const DeleteStudentButton = ({student}) => {

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const deleteStudent = () => {
    deleteStudentById(student.studentId);
    navigate("/students");
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
        <CModalHeader className='border-0' onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Eliminar estudiante</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {`Estás seguro que quieres eliminar el estudiante ${student.name} ${student.lastName}?`}
        </CModalBody>
        <CModalFooter className='border-0'>
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
              onClick={deleteStudent}
            >
              Si
            </CButton>
          </CModalFooter>
      </CModal>
    </div>
  );
}

export { DeleteStudentButton };