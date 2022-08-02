import Evaluation from "./Evaluation";

export default class EvaluationResult {
  constructor(private _evaluation: Evaluation, private _grade: number) {}

  get evaluation(): Evaluation { return this._evaluation }

  set evaluation(value: Evaluation) { this._evaluation = value }

  get grade(): number { return this._grade }

  set grade(value: number) {
    if (value > this._evaluation.grade) throw new Error('Nota não deve ser maior que avaliação');
    if (value < 0) throw new Error('Avaliação não pode ser negativa');
    this._grade = value;
  }
}