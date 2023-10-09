import { useEffect, useState } from "react";
import { LIST_STUDENT_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { GetAllStudents } from "../FakeApi/student";

function GetStudentsSelect({errors, value, callback}) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(GetAllStudents());
    });

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