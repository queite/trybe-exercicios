let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
    ]
  }

  console.log('O livro favortito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '".');

  leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
    }
    console.log(leitor.livrosFavoritos[1])
    
    console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')