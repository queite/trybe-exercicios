import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(teacher: Teacher, grade: number) {
    super(teacher, grade)

    this.teacher = teacher;
    this.grade = grade; // Se não declarar aqui o if da linha 13 não funciona. Pq? Pq o construtor internamente acessa direto o atributo _grade e não o setter grade
  }

  set grade(grade: number) {
    if (grade > 25) throw new Error('Pontuação máxima: 25');
    super.grade = grade;
  }

}