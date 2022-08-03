import Teacher from './Teacher';
import Evaluation from './Evaluation';

export default class Work extends Evaluation {
  constructor(teacher: Teacher, grade: number) {
    super(teacher, grade);
  }

  // set grade(value: number) {
  //   if (value > 50) throw new Error('A pontuação deve ser menor que 50 pontos.');
  //   super.grade = value;
  // }
}