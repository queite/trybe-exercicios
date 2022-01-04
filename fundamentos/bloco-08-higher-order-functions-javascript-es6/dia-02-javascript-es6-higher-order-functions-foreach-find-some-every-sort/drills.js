// Drills forEach
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// Assim estava no course
// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);

// Outro jeito. Diferença principal está em como os parâmentros são passados.
names.forEach((item, index) => names[index] = item.toUpperCase())
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// Drills find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 15 === 0); 
}
console.log(findDivisibleBy3And5())


const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names1.find(item => item.length === 5)
}

console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const founded = musicas.find(item => item.id = id);
  return founded.title;
}

console.log(findMusic('31031685'))