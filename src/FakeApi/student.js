import { GetAllDocuments } from "./document";

const students = [];

  function CreateStudentApi({ identification, name, lastName, email, phone, career, semester }) {
    const studentId = Math.floor(Math.random() * 1000000);
    students.push({ studentId, identification, name, lastName, email, phone, career, semester });
  }
  
  function GetStudent() {
    for (let i = 0; i < students.length; i++) {
      if (students[i].identification == "12312312342345") {
        return students[i];
      }
    }
    return null;
  }
  
  function UpdateStudent({ id, identification, name, lastName, email, phone, career, semester }) {
    const student = students.find((student) => student.studentId === id);
    if (student) {
      student.identification = identification;
      student.name = name;
      student.lastName = lastName;
      student.email = email;
      student.phone = phone;
      student.career = career;
      student.semester = semester;
      students[id] = student;
    }
  }
  
  function DeleteStudent({ id }) {
    const index = students.findIndex((student) => student.studentId === id);
    if (index !== -1) {
      students.splice(index, 1);
    }
  }

  function GetAllStudents() {
    return students;
  }

  export { CreateStudentApi, GetStudent, UpdateStudent, DeleteStudent, GetAllStudents }