const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById("page-title").innerText = 'O Iluminado';

//Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById('second-paragraph').innerText = 'vamos que vamos loren loren loren'

document.getElementById('subtitle').innerHTML = 'Tentando'
console.log('teste');

// Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName
const paragraph2 = document.getElementsByClassName('unindo-paragrafos');

// Altere algum estilo do primeiro deles.
paragraph2[0].style.color = 'blue';
paragraph2[0].style.fontFamily = 'sans';


// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName
const title = document.getElementsByTagName('h2');

title[0].style.color = 'green'