import { useEffect, useState } from "react";
import { LIST_STUDENT_GET_ENDPOINT } from "../connections/helpers/endpoints";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetStudentsSelect({errors, value, callback}) {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(LIST_STUDENT_GET_ENDPOINT)
    //     .then(response => {
    //         setStudents(response.data);
    //     }).catch(err => {
    //         navigate(-1);
    //     })
    // });

    return (
        <FloatingLabel controlId="students" label="Estudiantes" className="mb-4">
            <Form.Select 
                value={value} 
                onChange={e => callback(e.target.value)} 
                isInvalid={errors.sender}>
                <option value=''>Seleccione un estudiante</option>
                {
                    students.map(student => 
                    <option key={student.idStudent} value={student.idStudent}>
                        {`${student.identityCard} ${student.name} ${student.lastName}`}
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