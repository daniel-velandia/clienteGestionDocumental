import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { readStudents } from "../FakeApi/student";

function GetStudentsSelect({errors, value, callback}) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(readStudents());
    }, []);

    return (
        <FloatingLabel controlId="students" label="Estudiantes" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.sender}>
                <option value=''>Seleccione un estudiante</option>
                {
                    students.map(student => 
                    <option key={student.studentId} value={student.studentId}>
                        {`${student.identification} ${student.name} ${student.lastName}`}
                    </option>)
                }
            </Form.Select>
            <Form.Control.Feedback type='invalid'>
                {errors.sender}
            </Form.Control.Feedback>
        </FloatingLabel>
    );
}

export { GetStudentsSelect };