import Teacher from "./Teacher"

export default class Evaluation {
  constructor(private _teacher: Teacher, private _grade: number, private _type: 'prova' | 'trabalho') { }

  get teacher(): Teacher { return this._teacher};

  set teacher(teacher: Teacher) { this._teacher = teacher };

  get grade(): number { return this._grade};

  set grade(value: number) {
    if (value < 0) throw new Error('Nota deve ser positiva');
    if (this._type === "prova" && value > 25) throw new Error("Pontuação de provas não deve ser superior a 25");
    if (this._type === "trabalho" && value > 50) throw new Error("Pontuação de trabalhos não deve ser superior a 50")
    this._grade = value
  }

  get type(): 'prova' | 'trabalho' { return this._type}

  set type(value: 'prova' | 'trabalho') { this._type = value }
}