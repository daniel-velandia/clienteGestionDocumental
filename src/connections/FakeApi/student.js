var students = [];

async function createStudent(student) {
  const studentId = Math.floor(Math.random() * 1000000) + 1;
  student.studentId = studentId.toString();
  students.push(student);
}

async function readStudents() {
  return students;
}

async function findStudentById(studentId) {
  return students.find(student => student.studentId === studentId);
}

async function updateStudentById(studentId, student) {
  const currentStudent = await findStudentById(studentId);
  if (currentStudent) {
    Object.assign(currentStudent, student);
  }
}

async function deleteStudentById(studentId) {
  students = students.filter(student => student.studentId !== studentId);
}

export { createStudent, readStudents, findStudentById, updateStudentById, deleteStudentById };