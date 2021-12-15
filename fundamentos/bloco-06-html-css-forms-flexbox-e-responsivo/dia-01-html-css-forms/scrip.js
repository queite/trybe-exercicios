// Gabarito do exercício utilizado como ferramenta de aprendizagem uma vez que não parece viável resolvê-lo com os conteúdos apresentados até o momento.

// Cria os options do select
function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = stateOptions[index];
    option.value = stateOptions[index];
    states.appendChild(option);
  }
}

// Objeto com dados formulário
let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

// Validação de data
function dateValidation(input){// vem da função validateInput que a chama pelo objeto inputs validationStrategies e coloca o parametro(input=name do DOM)
  if(input.value.length === 0){
    return {
      message: 'A data não foi preenchida!'// Na verdade cria um objeto inputs, pois objetos não precisam ser declarados! É usado na função validateData
    }
  }

  // let regex = /(0[1-9]|1[0-9]|2[0-9]|3[1-2])\/(0[1-9]|1[0-2])\/(1[0-9][0-9][0-9]|2[0-9][0-9][0-9])/g; vou deixar esse regex aqui para consulta, fiz ele diferente da solução do exercício para entender melhor expressões regulares. De modo geral ele é mais efetivo, mas dada a necessidade de especificar o erro da data na mensagem ele não deixaria passar para as próximas mensagens de erro ficando sempre com a msg 'Data com formato inválido'
  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;// cfe resolução do exercício \d representa qualquer dígito entre numérico entre 0 e 9 | ^ representa inicio da linha(não tenho certeza de pq está aqui, parece desnecessário) | \/ representa a obrigatoriedade de / entre dia mês e ano | $ indica final da linha(tbm me parece desnecessário como o ^). Sobre ^ e $ no couse fala em quebras de linha no começo e no final, não entendi muito bem, mas não parece ter mta diferença do que vi no vídeo de inicio e fim da linha. A expressão regular só iria para outra linha se fosse usado a flag m = multiline e o próprio formato do input com type date não deixa existir outra linha ou quebra de linha. Talvez tenha uma razão que desconheço ainda.
  
  if(!regex.test(input.value)){// função test() retorna true ou false o que ela faz é confirmar se o regex bate com o valor do input. Nova para mim. Nesse caso se o input não fechar com o regex (!) ela retorna true e manda a msg
    return {
      message: 'Data: Formato inválido'
    };
  }

  let splitted = input.value.split('/');//usa o método .split() para separar os grupos da data(dia, mês e ano) por meio da barra. Método já estudado.
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }

  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }

  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

// Validando inputs (required e max-length)
function defaultValidation(input, name){
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if(validation.required && trimmed.length === 0){// Primeiro argumento apenas checa a existência do requisito e retorna true se existe e false de não existe. Faz a pesquisa dentro do objeto inputs inputs que foi criado para verificação de requisitos. Este objeto inputs é comparado com as informações entradas no form. Essa checagem toda parece ser necessário apenas pq usaremos preventDefault, pois essas informações já são verificadas automaticamente pelos campos do formulário (se configurados) qdo ele é usado da forma padrão.
    return false;
  }

  if(validation.maxLength && trimmed.length > validation.maxLength){// Mesmo que o comentário acima
    return false;
  }
  
  return true;
}

// Validação do select
function getSelectedOption(select){// Função auxiliar da validação do select. Qdo é chamada e de onde vem parâmetro?
  return select.options[select.selectedIndex];// pega o option selecionado entre os options do select. The selectedIndex property sets or returns the index of the selected option in a drop-down list.
}

function selectValidation(select, name){//Qdo é chamada e de onde vem parâmetro?
  let option = getSelectedOption(select);// Chama a função auxiliar que retorna apenas a opção selecionada. Não fez mto sentido criar uma função extra com apenas uma linha para isso. Não daria para usar select.options[select.selectedIndex] direto aqui? Testar depois.
  let validation = inputs[name];// armazena o name do objeto inputs inputs


  if(validation.required && (!option || option.disabled)){// se a chave(name) em inputs tiver a chave required retorna verdadeiro e se não tiver option(ou seja, option for undefined=falsy) ou se a drop-down list está desativada .disabled tbm retorna falso. Resumo: se a chave do objeto inputs tiver a chave required e não tiver opcão marcada ou estiver desativada retorna falso. (trabalhando com truthy e falsy
    return false;
  }

  return true;
}

// Validação radio button
function radioValidation(radio, name){// Apenas verifica se há uma opção selecionada e retorna verdadeiro se sim ou falso se não. Radio não é usado!
  let checked = document.querySelector(`[name=${name}]:checked`);// The checked property sets or returns the checked state of a checkbox. Armazena o item selecionado do radio button. Busca no HTML.
  
  if(checked === null){
    return false;
  }

  return true;
}

// Objeto com tipos(type) de input que chama a função de validação de cada tipo. Sendo default o input com type="text" que nesse exercício apresenta os atributos required e max-length.
let validationStrategies = {
  default: defaultValidation,// É definida sua chamada na função function validateInput(inputName) quando não há um type específicado no objeto inputs. Assim se cobre todos os tipos de input presentes no formulário(default(text), date, select e radio). É criada uma função de validação para cada tipo que é chamada neste objeto inputs.
  date: dateValidation,
  select: selectValidation,
  radio: radioValidation,
}

// Verifica as chaves do objeto inputs (conforme parâmetro) e direciona para o objeto inputs validationStrategies que aponta para a função de validação cfe o type

function validateInput(inputName){// É chamada na funcção validateData e recebe como parâmetro o nome das variáveis do objeto inputs por meio de um for.
  let inputType = inputs[inputName].type;// pega o type do objeto inputs
  let input = document.querySelector(`[name=${inputName}]`);//pega o name do input no html que seja igual ao parâmetro da função

  if(inputType){//só diz se inputType(key:type) existe no objeto inputs, ou seja, se retorna true. Vai funcionar para select, radio e date
    let validationFunction = validationStrategies[inputType];//busca o tipo de input no objeto inputs validationStrategies que chama a função de validação de cada type
    return validationFunction(input, inputName);// Retorna a função validationFunction indicando seus respectivos parâmetros. Descobrir o que ela faz
  }

  return validationStrategies.default(input, inputName);// Será executada para as entradas do objeto inputs que não tem type, ou seja os type="text";
}

// Renderiza erros
function renderErrorMessages(messages){
  let form = document.querySelector('#cv-form');
  let messageDiv = document.createElement('div');
  messageDiv.className = 'error';
  form.prepend(messageDiv);// Coloca a Div no formulário antes de qualquer elemento

  for(let message of messages){//itera todas as mensagens do array messages
    let p = document.createElement('p');
    p.innerText = message;

    messageDiv.appendChild(p);
  }
}

// Cria parágrafo para os dados do type='text'
function defaultRendering(input){// input é o name(DOM) que será dado pela função renderData
  let p = document.createElement('p');
  p.innerText = input.value;

  return p;
}

// Cria parágrafo para os dados do type='radio'
function radioRendering(input){// input é o name(DOM) que será dado pela função renderData
  let p = document.createElement('p');
  let name = input.getAttribute('name');//armazena o atributo name do DOM
  let checked = document.querySelector(`[name=${name}]:checked`);// armazena a opção selecionada

  if(checked){
    p.innerText = checked.value;
  }

  return p;
}

// Cria parágrafo para conteúdo do select
function selectRendering(input){
  let p = document.createElement('p');
  let option = getSelectedOption(input)
  p.innerText = option.value;
  
  return p;
}

// Objeto que filtra pelo type qual a função a ser usada
let renderStrategies = {
  default: defaultRendering,
  radio: radioRendering,
  select: selectRendering,
}

// Renderiza os dados do formulário, caso tudo esteja correto, com as informações digitadas pelo usuário
function renderData(){
  let dataDiv = document.createElement('div');
  dataDiv.className = 'data';

  let form = document.querySelector('#cv-form');
  form.prepend(dataDiv);// The prepend() method inserts specified content at the beginning of the selected elements. Ou seja coloca a div com a classe data que acabou de ser criada no começo do formulário


  for(let name in inputs){// passa por todo os elementos do objeto inputs
    let inputType = inputs[name].type;
    let input = document.querySelector(`[name=${name}]`);// armazena o name do DOM

    let element;

    if(renderStrategies[inputType]){//verifica qual a função a ser chamada no objeto inputs renderStrategies pelo type, ou seja, tem que ter type(serve para date, radio e select)
      element = renderStrategies[inputType](input, dataDiv)// dá ao elemento criado o resultado da função de renderização correta, ou seja, o conteúdo digitado no formulário pelo usuário. É aqui que a função é chamada e acrescentado seu parâmetro(input=name). Só não entendi essa parte do que parece ser um segundo parâmetro de função. dataDiv=a nova div criada nessa função)
    } else {
      element = renderStrategies.default(input, dataDiv)// Qdo não há type puxa direto a função default
    }

    dataDiv.appendChild(element);// coloca o element dentro de dataDiv
  }
}

// Armazena os resultados das validações e retona objeto inputs com resultados
function validateData(){
  let validationsList = {};

  for(let inputName in inputs){// Passa por todas as chaves do objeto inputs chamando a função validateInput para cada uma delas.
    let isValid = validateInput(inputName);//O parâmentro inputName vem no nome das chaves do inputs. Todas as validações de type retornam verdadeiro ou falso, exceto pela data que retorna, qdo falso, msg de erro.
    validationsList[inputName] = isValid;//Portanto, atribui para o objeto inputs validationList o nome das chaves do objeto inputs(inputName) bem como a elas dá o valor true ou false(resultado da função validateInput inserido na variável isValid).
  }
  
  let counter = 0;
  let messages = [];

  for(let index in validationsList){
    if(validationsList[index] === false){
      counter += 1;
    }

    if(validationsList[index].message){
      counter += 1;
      messages.push(validationsList[index].message);// atualiza o array messages com a msg de erro, qdo houver, dentro da validationList
    }
  }

  return { // Na verdade cria um objeto inputs, pois objetos não precisam ser declarados!
    errorQtd: counter,
    messages, // Armazena neste objeto inputs a array com todas as msgs de erro
  }
}

//Limpa as divs que contem a classe error e a div que contem classe data. Usada para limpar as informações anteriores caso haja.
function clearDivs(){
  let errorDivs = document.querySelectorAll('.error');

  for(div of errorDivs){
    div.remove();
  }

  let dataDiv = document.querySelector('.data');

  if(dataDiv){
    dataDiv.remove();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();// função que armazena os resultados das validações e retona objeto inputs com resultados

  clearDivs(); // função que limpa os dados das divs em que retornamos erros antes de tentar novamente
  
  if(validation.errorQtd === 0){// errorQtd é uma chave dentro do objeto inputs retornado pela função validateData(). Ele conta os falses das validações
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos')//unshift() adiciona ao início do array a mensagem Dados inválidos. Ou seja, será a primeira linha do array messages que foi armazenado no objeto inputs retornado pela função validateData()

    renderErrorMessages(validation.messages)// provavelmente renderiza as mensagem (manda para tela). Descobrir relação entre validation(resultado da funçãO validateData() e messages (é criada em validateData())
  }
}

function clearFields() {
  let formElements = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')
  let div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

window.onload = function () {
  createStateOptions();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields)
}