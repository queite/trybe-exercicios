import Person from "./Person";

export default class Student extends Person{
  private _examsGrades: number[];
  private _worksGrades: number[];
  private _enrollment: string;

  constructor (name: string, birthDate: Date) {
    super(name, birthDate)
    this._enrollment = Student.generateEnrollment();
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string){
    if (value.length < 16) throw new Error("Deve possuir, pelo menos, 16 dígitos");
    this._enrollment = value;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4)throw new Error('São permitidas no máximo 4 notas de teste')
    this._examsGrades = value;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2)throw new Error('São permitidas no máximo 2 notas de trabalhos')
    this._worksGrades = value;
  }

  gradeSum() {
    const sum = (acc: number, curr: number) => acc += curr;
    const grades = [...this._worksGrades, ...this._examsGrades];
    return grades.reduce(sum);
  }

  gradeAverage() {
    const divider = this._examsGrades.length + this._worksGrades.length;
    return (this.gradeSum() / divider ).toFixed(2);
  }

  static generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return randomStr;
  }
}
//Já os atributos criados com o modificador private só podem ser lidos e modificados dentro da classe. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe, você terá um erro do compilador.