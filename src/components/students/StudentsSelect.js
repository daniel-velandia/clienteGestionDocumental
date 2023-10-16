import { useEffect, useState } from "react";
import { readStudents } from "../../connections/FakeApi/student";
import { CFormLabel, CFormSelect } from "@coreui/react";

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
        <div>
            <CFormLabel htmlFor="sender" className='mt-3'>
                Estudiantes
            </CFormLabel>
            <CFormSelect 
                id='sender'
                feedbackInvalid={errors.sender}
                invalid={errors.isSenderInvalid}
                aria-label="estudiante"
                options={students}
                value={student}
                onChange={e => setStudent(e.target.value)}
            />
        </div>
    );
}

export { StudentsSelect };