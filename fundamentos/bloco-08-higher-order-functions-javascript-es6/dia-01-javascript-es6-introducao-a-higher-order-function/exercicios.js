// Exercício 1
const EmployeesInformation = (name) => {
  return {name, email: `${name.toLowerCase().split(' ').join('_')}@trybe.com`}
}

const newEmployees = () => {
  const employees = {
    id1: EmployeesInformation('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: EmployeesInformation('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: EmployeesInformation('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

// Exercício 2
const validation = (number, random) => number === random;

const sort = (number, func) => {
  const random = Math.floor(Math.random() * 5 + 1);
  return func(number, random) ? 'Parabéns você ganhou':'Tente novamente'
}
console.log(sort(2, validation));

// Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const check = (gabarito, respostas) => {
//   let count = 0;
//   for (let i = 0; i < gabarito.length; i++) {
//     if (gabarito[i] === respostas[i]) {
//       count += 1;
//     }else if (respostas[i] === 'N.A') {
//       count += 0;
//     } else {
//       count -= 0.5;
//     }
//   }
//   return count
// }

// const result = (gabarito, respostas, func) => func(gabarito, respostas);
// console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, check));

const addPoint = (gabarito, respostas) => {
  if (gabarito === respostas) {
    return 1;
  }
  if (respostas === 'N.A') {
    return 0;
  }
  return -0.5
}

const result = (gabarito, respostas, func) => {
  let count = 0;
  for (let i = 0; i < gabarito.length; i++) {
    const addPointReturn = func(gabarito[i], respostas[i]);
    count += addPointReturn;
  }
  return `${count} pontos`
}

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, addPoint))

