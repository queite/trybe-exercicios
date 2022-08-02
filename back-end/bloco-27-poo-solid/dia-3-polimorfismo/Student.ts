import EvaluationResult from "./EvaluationResult";
import Enrollment from "./interfaces/EnrollmentInterface";
import Person from "./Person";

export default class Student extends Person implements Enrollment{
  private _evaluationsResults: EvaluationResult[];
  private _enrollment: string;

  constructor (name: string, birthDate: Date) {
    super(name, birthDate)
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string){
    if (value.length < 16) throw new Error("Deve possuir, pelo menos, 16 dígitos");
    this._enrollment = value;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  sumGrades(): number {
    return this._evaluationsResults // pq colocar um array e desetriturar e o original já é um array?
      .reduce((previousNote, note) => note.grade + previousNote, 0);
  } // com a forma que tinha feito antes dá um monte de erro de tipagem. Não entendo.

  gradeAverage() {
    return (this.sumGrades() / this._evaluationsResults.length ).toFixed(2);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}
//Já os atributos criados com o modificador private só podem ser lidos e modificados dentro da classe. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe, você terá um erro do compilador.