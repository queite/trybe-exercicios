import Teacher from "./Teacher"

export default abstract class Evaluation {
  constructor(private _teacher: Teacher, private _grade: number) {

    this.teacher = _teacher;
    this.grade = _grade; // Se não declarar aqui o if da linha 17 não funciona. Pq? Pq o construtor internamente acessa direto o atributo _grade e não o setter grade
   }

  get teacher(): Teacher { return this._teacher};

  set teacher(teacher: Teacher) { this._teacher = teacher };

  get grade(): number { return this._grade};

  set grade(value: number) {
    if (value < 0) throw new Error('Nota deve ser positiva');
    this._grade = value
  }
}