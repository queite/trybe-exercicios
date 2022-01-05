const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1900, // 1920 original
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890, 
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const expectedResult = false;

//Solução do course
function authorUnique() {
  return books.every((book) => // every vai passar por todos os elementos e recebe como função o some
    !books.some((bookSome) =>  // some vai passar por todos até que encontre um. O some deve retornar true se encontrar aquele que não...
      (bookSome.author.birthYear === book.author.birthYear) // compara o item do some com o item do every. Mas ele não está comparando a mesma posição dos dois?
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique())
// Every retorna verdadeiro se todos os elementos satisfazem a condição
// Neste caso a condição é não ter um item que satisfaça a condição do some
// A condição do some é o birthYear do dome ser igual ao birthYear do every e nome do some ser diferente do nome do every.

// Mas eles não estao sempre na mesma posição? Vai dar sempre falso, mesmo que tenha nascimentos iguais. Não ele dá true se no tiver anos iguais. Então parece que o funcionamento é como o do for aninhado. Vai começãr com i item [0] do every passar por todos os itens do some e fazer o mesmo para cada item do every. Assim faz sentido.