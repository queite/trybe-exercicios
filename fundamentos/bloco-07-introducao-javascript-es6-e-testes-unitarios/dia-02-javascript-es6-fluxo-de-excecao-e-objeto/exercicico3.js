const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNightShift(obj, key, value) {
  obj[key] = value;
}
addNightShift(lesson2, 'turno', 'noite');

// function listKeys(obj) {
//   console.log(Object.keys(obj));
// }
// listKeys(lesson1);

// function objectSize(obj) {
//   console.log(Object.keys(obj).length)
// }
// objectSize(lesson3);

// const objectValues = obj => Object.values(obj);
// console.log(objectValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

function totalStudents(obj) {
  let total = 0;
  const subObjects = Object.keys(obj);
  for (i in subObjects) {
    total += obj[subObjects[i]].numeroEstudantes 
  }
  return total
}
console.log(totalStudents(allLessons));

const getValueByPosition = (obj, position) => Object.values(obj)[position];
console.log(getValueByPosition(lesson3, 1));

const verify = (obj, key, value) => {
  if (obj[key] !== undefined && obj[key] === value) {
    return true;
  }
  return false;
}
console.log(verify(lesson2, 'professor', 'Carlos'));