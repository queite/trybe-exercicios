import Person from "./Person";
import Student from "./Student";
import Employee from "./interfaces/EmployeeInterface";
import { generateKey } from "crypto";
import Subject from "./Subject";
import Teacher from "./Teacher";

//PERSON CLASS
const p1 = new Person('Lenira', new Date('1998-03-26'));
console.info("Person Class", p1)

//STUDENT CLASS
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
carolina.examsGrades = [25, 20, 25, 23];
console.log('Student Class', carolina);

// EMPLOYEE INTERFACE
const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};
console.log(testInterfaceEmployee);

// SUBJECT CLASS
const historia = new Subject('História');
console.info(historia);

// TEACHER CLASS
const JoaoTeacher = new Teacher('João Augusto', new Date('1980-5-26'), 3500, historia);
console.info(JoaoTeacher);
JoaoTeacher.admissionDate = new Date('2022-05-06');
console.info(JoaoTeacher);