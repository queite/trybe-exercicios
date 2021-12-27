const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

function mathStudents(obj, lesson) {
  const keysArray = Object.keys(obj);
  let total = 0;
  for (let i in keysArray) {
    if (obj[keysArray[i]].materia === lesson) {
      total += obj[keysArray[i]].numeroEstudantes
    }
  }
  return total
}
console.log(mathStudents(allLessons, 'História'));

function professorInformation(obj, professor) {
  const rel = {
    professor:'',
    materia: [],
    numeroEstudantes: 0,
    turno: []
  };
  const keysArray = Object.keys(obj);
  for (let i in keysArray) {
    if (obj[keysArray[i]].professor === professor) {
      rel.professor = professor;
      rel.materia.push(obj[keysArray[i]].materia);
      rel.numeroEstudantes += obj[keysArray[i]].numeroEstudantes;
      rel.turno.push((obj[keysArray[i]].turno))
    }
  }
  return rel;
}
console.log(professorInformation(allLessons, 'Maria Clara'));