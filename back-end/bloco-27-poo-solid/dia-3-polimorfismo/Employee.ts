import Enrollment from "./interfaces/EnrollmentInterface";
import Person from "./Person";

export default class Employee extends Person implements Enrollment {
  private _admissionDate: Date;
  private _enrollment: string;

  constructor(name: string, birthdate: Date, private _salary: number) {
    super(name, birthdate);

    this.salary = _salary;
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment();
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0 ) throw new Error('Digite um valor positivo')
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    if (date.getTime() > new Date().getTime()) throw new Error('Data inválida. Datas futuras não permitidas');
    this._admissionDate = date;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string){
    if (value.length < 16) throw new Error("Deve possuir, pelo menos, 16 dígitos");
    this._enrollment = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FUNC${randomStr}`;
  } // copiei a do course para demonstrar polimorfismo.
}