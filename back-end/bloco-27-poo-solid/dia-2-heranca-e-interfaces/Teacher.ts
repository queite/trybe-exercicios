import Employee from "./interfaces/EmployeeInterface";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _registration: string;
  private _admissionDate: Date;

  //
  constructor(name: string, birthDate: Date, private _salary: number, private _subject: Subject) { // subject recebe o tipo da própria classe
    super(name, birthDate) //não precisa redeclarar como private os atributos que vem da superclass

    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
    this._subject = _subject;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    if (date.getTime() > new Date().getTime()) throw new Error('Data inválida. Datas futuras não permitidas');
    this._admissionDate = date;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0 ) throw new Error('Digite um valor positivo')
    this._salary = value;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(name: Subject) {
    this._subject = name;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return randomStr;
  }

}