function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1 Cria dias do calendário
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dayList = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i +=1) {
    const list = document.createElement('li');
    list.innerText = dezDaysList[i];
    list.className = 'day';
    dayList.appendChild(list);
  }
}
createDays();

function holidays(holidayDays) {
  const list = document.querySelectorAll('.day');
  for (let j = 0; j < holidayDays.length; j += 1){
    for (let i = 0; i < list.length; i += 1) {
      if (holidayDays[j] == list[i].innerHTML){
        list[i].className += ' holiday'
      }
    }
  }
}
holidays([24,25,31]);

function fridays(fridayDays) {
  const list = document.querySelectorAll('.day');
  for (let j = 0; j < fridayDays.length; j += 1){
    for (let i = 0; i < list.length; i += 1) {
      if (fridayDays[j] == list[i].innerHTML){
        list[i].className += ' friday'
      }
    }
  }
}
fridays([4,11,18,25]);

// 2 Cria borão feriados 
function createButtonFeriados(feriados) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button)
  button.innerText = 'Feriados';
}
createButtonFeriados();

// 3 Adicona evento ao botão feriado
const button = document.getElementById('btn-holiday');

button.addEventListener('click', function() {
  const holiday = document.getElementsByClassName('holiday');
  const color = 'rgb(238,238,238)';
  const newColor = 'red';
  for (let i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor === newColor) {
      holiday[i].style.backgroundColor = color;
    } else {
      holiday[i].style.backgroundColor = newColor;
    }
    console.log(holiday[i].backgroundColor);
  }
})

// 4 Cria botão sexta-feira
function fridayButton(fryday) {
  let createFridayButton = document.createElement('button');
  document.querySelector('.buttons-container').appendChild(createFridayButton);
  createFridayButton.innerHTML = fryday;
  createFridayButton.id = 'btn-friday';
}
fridayButton('Sexta-feira');

// 5 Adicona evento ao botão sexta-feira
const buttonFriday = document.getElementById('btn-friday');
const decemberFridays = [4,11,18,25]

buttonFriday.addEventListener('click', function () {
  const fridayClass = document.getElementsByClassName('friday');
  const newText = 'SEXTOU';
  for (let i = 0; i < fridayClass.length; i +=1) {
    if(fridayClass[i].innerHTML !== newText) {
      fridayClass[i].innerHTML = newText;
    } else {
      fridayClass[i].innerHTML = decemberFridays[i];
    }
  }
});

// 6 efeito zoom
function zoom(event) {
  const days = document.querySelector('#days');
  
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '25px';
  });
}

function zoomOut(event) {
  const days = document.querySelector('#days');
  
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = 'unset';
  });
}
zoom();
zoomOut();

// 7 Cria tarefa 
function task(taskName) {
  const tasks = document.createElement('span');
  document.querySelector('.my-tasks').appendChild(tasks);
  tasks.innerHTML = taskName
}
task('estudar');

// 8 Cria elemento para tarefa com cor 
function taskColor(cor) {
  const taskColor = document.createElement('div');
  taskColor.className = 'task';
  document.querySelector('.my-tasks').appendChild(taskColor);
  taskColor.style.backgroundColor = cor;
}
taskColor('purple');

// 9 Insere seleção de tarefa
function selectTask() {
  const divTask = document.querySelector('.task');

  divTask.addEventListener('click', function(event) {
    if (divTask.className === 'task') {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task'
    }
  })
}
selectTask();

// 10 colocar cor da tarefa no dia. Não consegui fazer, solução abaixo é do gabarito.

// function setDayColor() {
//   let selectedTask = document.getElementsByClassName('task selected'); // sleciona a classe task selected array
//   let days = document.querySelector('#days'); // seleciona a ul
//   let taskDiv = document.querySelector('.task'); // seleciona a classe task
//   let taskColor = taskDiv.style.backgroundColor; //seleciona a cor de fundo da classe task
  
//   days.addEventListener('click', function(event){ //adiciona evento ao ul
//     let eventTargetColor = event.target.style.color; // seleciona a cor do objeto clicado (dia)
//     if (selectedTask.length > 0 && eventTargetColor !== taskColor) { // se a classe task selected for maior que 0 e a cor do objeto atual for diferente da cor de fundo da classe task
//       let color = selectedTask[0].style.backgroundColor; // armazena e cor de fundo da primeira posição da classe task selected na variável color (no caso a cor da tarefa)
//       event.target.style.color = color; // coloca a cor armazenda no dia clicado
//     } else if (eventTargetColor === taskColor && selectedTask.length !== 0) { // se a cor do objeto clicado for igual a cor de fundo da tarefa e o tamanho da classe task selecte for diferente de 0
//       event.target.style.color = 'rgb(119,119,119)'; // coloca a cor original de volta
//     }
//   });
// };

// setDayColor();

// mesma função usada para entender a necessidade da parte " let eventTargetColor = event.target.style.color; " é preciso para que haja uma referência de cor do dia selecionado, caso contrário o computador não consegue ver a cor do dia selecionado para fazer a mudança conforme o if.
function putTaskColorOnDay() {
  let selectedTask = document.getElementsByClassName('task selected'); // sleciona a classe task selected array
  let days = document.querySelector('#days'); // seleciona a ul
  let taskDiv = document.querySelector('.task'); // seleciona a classe task
  let taskColor = taskDiv.style.backgroundColor; //seleciona a cor de fundo da classe task

  days.addEventListener('click', function(event){ //adiciona evento ao ul
    let eventTargetColor = event.target.style.color; // seleciona a cor do objeto clicado (dia)
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) { // se a classe task selected for maior que 0 e a cor do objeto atual for diferente da cor de fundo da classe task
      event.target.style.color = taskColor;
    } else {
      event.target.style.color = 'rgb(119,119,119)'; // coloca a cor original de volta
    }
  })
}
putTaskColorOnDay();

// Bônus 
