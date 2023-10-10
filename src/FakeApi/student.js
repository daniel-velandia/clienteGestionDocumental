import { StudentDb } from "../models/Student";

let students = [];

function createStudent(student) {
  const studentId = Math.floor(Math.random() * 1000000) + 1;
  const studentDb = new StudentDb(
    studentId, 
    student.identification,
    student.name, 
    student.lastName, 
    student.email, 
    student.phone, 
    student.career, 
    student.semester);
  students.push(studentDb);
}

function readStudents() {
  return students;
}

function findStudentById(studentId) {
  return students.find(student => student.studentId === studentId);
}

function updateStudentById(studentId, student) {
  const studentDb = findStudentById(studentId);
  if (studentDb) {
    Object.assign(studentDb, student);
  }
}

function deleteStudentById(studentId) {
  students = students.filter(student => student.studentId !== studentId);
}

export { createStudent, readStudents, findStudentById, updateStudentById, deleteStudentById };