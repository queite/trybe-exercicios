import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(teacher: Teacher, grade: number) {
    super(teacher, grade)

    // this.teacher = teacher;
    // this.grade = grade; // Se não declarar aqui o if da linha 13 não funciona. Pq? Pq o construtor internamente acessa direto o atributo _grade e não o setter grade
  }

  get grade():number {
    return super.grade
  } // Sem esse grade ele não acessa o valor mesmo herdando da classe Evaluation que tem o set grade

  // O QUE ESTÁ CAUSANDO O PROBLEMA SE NÃO CONSEGUIR ACESSAR O GRADE É ESSE SET, MAS NÃO DEVERIA ACEITAR POLIMORFISMO?
  set grade(grade: number) {
    console.log('entrou do setter de Exam')
    if (grade > 25) throw new Error('Pontuação máxima: 25');
    super.grade = grade;
  }

}