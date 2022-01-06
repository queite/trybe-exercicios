const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const newArray = arrays.reduce((acc, item) => acc.concat(item));
console.log(newArray);