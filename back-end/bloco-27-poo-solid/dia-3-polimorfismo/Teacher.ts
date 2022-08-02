import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee {

  constructor(name: string, birthDate: Date, salary: number, private _subject: Subject) { // subject recebe o tipo da própria classe
    super(name, birthDate, salary) //não precisa redeclarar como private os atributos que vem da superclass

    this._subject = _subject;
    this.enrollment = this.generateEnrollment(); ;// vem da classe Employee. enrollment vem de get e set
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(name: Subject) {
    this._subject = name;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}