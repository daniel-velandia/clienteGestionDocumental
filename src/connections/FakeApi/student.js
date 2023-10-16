var students = [];

function createStudent(student) {
  const studentId = Math.floor(Math.random() * 1000000) + 1;
  student.studentId = studentId;
  students.push(student);
}

function readStudents() {
  return students;
}

function findStudentById(studentId) {
  return students.find(student => student.studentId === studentId);
}

function updateStudentById(studentId, student) {
  const currentStudent = findStudentById(studentId);
  if (currentStudent) {
    Object.assign(currentStudent, student);
  }
}

function deleteStudentById(studentId) {
  students = students.filter(student => student.studentId !== studentId);
}

export { createStudent, readStudents, findStudentById, updateStudentById, deleteStudentById };