import { useEffect, useState } from "react";
import { readStudents } from "../../connections/FakeApi/student";
import { CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";

const StudentsSelect = ({errors, student, setStudent}) => {

    const [students, setStudents] = useState([]);

    const getStudents = (studentsObtained) => {

        const initialSelectArray = [
            { label: 'Seleccione un estudiante', value: '' }
        ];

        const studentsArray = studentsObtained.map(student => (
            { 
                label: `${student.identification} ${student.name} ${student.lastName}`, 
                value: student.studentId
            }
        ));

        return initialSelectArray.concat(studentsArray);
    }

    useEffect(() => {

        const studentsObtained = readStudents();

        setStudents(getStudents(studentsObtained));

    }, []);

    return (
        <CInputGroup className="mb-4">
            <CInputGroupText className="border-0 shadow-sm">
                <CIcon icon={cilUser} />
            </CInputGroupText>
                <CFormSelect 
                    id="studentSender"
                    feedbackInvalid={errors.sender}
                    invalid={errors.isSenderInvalid}
                    aria-label="estudiante"
                    options={students}
                    value={student}
                    onChange={e => setStudent(e.target.value)}
                />
        </CInputGroup>
    );
}

export { StudentsSelect };