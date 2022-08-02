import Evaluation from "./Evaluation";
import EvaluationResult from "./EvaluationResult";
import Exam from "./Exam";
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const historia = new Subject('História');
console.info(historia);
//Subject { _name: 'História' }

const teacher1 = new Teacher('Alan', new Date('1980-12-05'), 3500, historia);
console.info(teacher1);
//Teacher {
//   _name: 'Alan',
//   _birthDate: 1980-12-05T00:00:00.000Z,
//   _salary: 3500,
//   _admissionDate: 2022-08-02T18:23:06.891Z,
//   _enrollment: 'PRF20439132627201045',
//   _subject: Subject { _name: 'História' }
// }

const student1 = new Student('João', new Date('1989-05-26'));
console.log(student1);
// Student {
//   _name: 'João',
//   _birthDate: 1989-05-26T00:00:00.000Z,
//   _enrollment: 'STU19313760960548972',
//   _evaluationsResults: []
// }

const exam1 = new Exam(teacher1, 25);
console.info(exam1);
// Exam {
//   _teacher: Teacher {
//     _name: 'Alan',
//     _birthDate: 1980-12-05T00:00:00.000Z,
//     _salary: 3500,
//     _admissionDate: 2022-08-02T18:42:11.447Z,
//     _enrollment: 'PRF2605012487424112',
//     _subject: Subject { _name: 'História' }
//   },
//   _grade: 25
// }

const evaluationsResults1 = new EvaluationResult(exam1, 18); // como acessar a grade do objeto de Exam dentro desse objeto que recebe o objeto de exam?
console.info(evaluationsResults1);
// EvaluationResult {
//   _evaluation: Evaluation {
//     _teacher: Teacher {
//       _name: 'Alan',
//       _birthDate: 1980-12-05T00:00:00.000Z,
//       _salary: 3500,
//       _admissionDate: 2022-08-02T18:23:06.891Z,
//       _enrollment: 'PRF20439132627201045',
//       _subject: [Subject]
//     },
//     _grade: 25,
//     _type: 'prova'
//   },
//   _grade: 18
// }

student1.addEvaluationResult(evaluationsResults1);
console.log(student1);
// Student {
//   _name: 'João',
//   _birthDate: 1989-05-26T00:00:00.000Z,
//   _enrollment: 'STU19313760960548972',
//   _evaluationsResults: [ EvaluationResult { _evaluation: [Evaluation], _grade: 18 } ]
// }