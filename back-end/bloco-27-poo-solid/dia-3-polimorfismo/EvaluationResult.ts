import Evaluation from "./Evaluation";
import Exam from "./Exam";

export default class EvaluationResult {
  constructor(private _evaluation: Exam, private _grade: number) { // Evaluation é outra classe

    this.evaluation = _evaluation; // recebe um objeto instanciado da classe Exam
    this.grade = _grade; // Se aqui chamo this._grade ele seta direto o valor sem passar pelo método set grade e os ifs não funcionam
  }

  get evaluation(): Exam { return this._evaluation }

  set evaluation(value: Exam) { this._evaluation = value }

  get grade(): number { return this._grade } // esse grade é dessa classe

  set grade(value: number) {
    console.info('ESTE this.evaluation.grade', this.evaluation.grade); // como acessar a grade do objeto de Exam dentro desse objeto que recebe o objeto de exam?
    console.log('ESTE this.evaluation', this.evaluation);
    if (value > this.evaluation.grade) throw new Error('Nota não deve ser maior que avaliação');
    if (value < 0) throw new Error('Avaliação não pode ser negativa');
    this._grade = value;
  }
}