const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, item) => 
    acc + item.split('').reduce((sum, letter) => {
      if (letter === 'a'  || letter === 'A') return sum + 1;
      return sum;
    },0), 0)
}
console.log(containsA())