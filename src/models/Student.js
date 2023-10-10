class Student {
    constructor(identification, name, lastName, email, phone, career, semester) {
        this.identification = identification;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.career = career;
        this.semester = semester;
      }
}

class StudentDb {
    constructor(studentId, identification, name, lastName, email, phone, career, semester) {
        this.studentId = studentId;
        this.identification = identification;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.career = career;
        this.semester = semester;
      }
}

export { Student, StudentDb };