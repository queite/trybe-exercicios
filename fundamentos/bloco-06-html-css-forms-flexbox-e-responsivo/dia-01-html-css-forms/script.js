// Gabarito do exercício utilizado como ferramenta de apŕendizagem uma vez que não parece viável resolvê-lo com os conteúdos apresentados até o momento.
// Variáveis
let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let selectEstados = document.getElementById('estado');


// Cria os options do select
function createStatesOptions() {
  for (let i = 0; i < estados.length; i += 1) {
    let createOption = document.createElement('option');
    createOption.innerText = estados[i];
    createOption.name = estados[i];
    selectEstados.appendChild(createOption);
  }
}

// Objeto com dados formulário
let form = {
  nome: {
    maxLenght: 40,
    required: true, 
  },
  email: {
    maxLenght: 40,
    required: true,
  },
  cpf: {
    maxLenght: 11,
    required: true,
  },
  endereco: {
    maxLenght: 200,
    required: true,
  },
  cidade: {
    maxLenght: 28,
    required: true,
  },
  estado: {
    type: 'select',
    required: true,
  },
  tipo: {
    required: true,
    type: 'radio',
  },
  resumo: {
    maxLenght: 1000,
    required: true,
  },
  cargo: {
    maxLenght: 40,
    required: true,
  },
  descricaoCargo: {
    maxLenght: 500,
    required: true,
  },
  data: {
    type: 'date',
    required: true,
  },
}

// Validação de data
function dateValidation(input, name) {//entender qdo ela é chamada e de onde vem os parâmetros
  if (input.value.length === 0) {
    return {
      message: 'A data não foi preenchida!'// parece criar um comportamento de variável mesmo sem declaração, pois seu retorno é usado na função validateData
    }
  }

  // let regex = /(0[1-9]|1[0-9]|2[0-9]|3[1-2])\/(0[1-9]|1[0-2])\/(1[0-9][0-9][0-9]|2[0-9][0-9][0-9])/g; vou deixar esse regex aqui para consulta, fiz ele diferente da solução do exercício para entender melhor expressões regulares. De modo geral ele é mais efetivo, mas dada a necessidade de especificar o erro da data na mensagem ele não deixaria passar para as próximas mensagens de erro ficando sempre com a msg 'Data com formato inválido'
  let regex = /^\d\d\/\d\d\/\d\d\d\d$/; // cfe resolução do exercício \d representa qualquer dígito entre numérico entre 0 e 9 | ^ representa inicio da linha(não tenho certeza de pq está aqui, parece desnecessário) | \/ representa a obrigatoriedade de / entre dia mês e ano | $ indica final da linha(tbm me parece desnecessário como o ^). Sobre ^ e $ no couse fala em quebras de linha no começo e no final, não entendi muito bem, mas não parece ter mta diferença do que vi no vídeo de inicio e fim da linha. A expressão regular só iria para outra linha se fosse usado a flag m = multiline e o próprio formato do input com type date não deixa existir outra linha ou quebra de linha. Talvez tenha uma razão que desconheço ainda.
  if (!regex.test(input.value)) {// função test() retorna true ou false o que ela faz é confirmar se o regex bate com o valor do input. Nova para mim. Nesse caso se o input não fechar com o regex (!) ela retorna true e manda a msg
    return {
      message: 'Data com formato inválido'
    }
  }

  let splitted = input.value.split('/');//usa o método .split() para separar os grupos da data(dia, mês e ano) por meio da barra. Método já estudado.
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if (day < 0 || day > 31) {
    return {
      message: 'Dia inválido'
    }
  }
  if (month < 0 || month > 12) {
    return {
      message: 'Mês inválido'
    }
  }
  if (year < 0) {
    return {
      message: 'Ano inválido'
    }
  }

  return true;
}

// Validando inputs (required e max-length)
function defaultValidation(input, name) {
  let trimmed = input.value.trimm();
  let validation = input[name];

  if (validation.required && trimmed.length === 0) {  // Primeiro argumento apenas checa a existência do requisito e retorna true se existe e false de não existe. Faz a pesquisa dentro do objeto forms que foi criado para verificação de requisitos. Este objeto é comparado com as informações entradas no form. Essa checagem toda parece ser necessário apenas pq usaremos preventDefault, pois essas informações já são verificadas automaticamente pelos campos do formulário (se configurados) qdo ele é usado da forma padrão.
    return false;
  }
  if (validation.maxLenght && trimmed.length > validation.maxLenght) { // Mesmo que o comentário acima
    return false;
  }
  return true;
}

// Validação do select
function getSelectedOption(select) {// Função auxiliar da validação do select. Qdo é chamada e de onde vem parâmetro?
  return select.options[select.selectedIndex]; //pega o option selecionado entre os options do select. The selectedIndex property sets or returns the index of the selected option in a drop-down list.
}

function selectValidation(select, name) {//Qdo é chamada e de onde vem parâmetro?
  let option = getSelectedOption(select);// Chama a função auxiliar que retorna apenas a opção selecionada. Não fez mto sentido criar uma função extra com apenas uma linha para isso. Não daria para usar select.options[select.selectedIndex] direto aqui? Testar depois.
  let validation = form[name];// armazena o name do objeto form

  if (validation.required && (!option || option.disabled)) {// se a chave(name) em form tiver a chave required retorna verdadeiro e se não tiver option(ou seja, option for undefined=falsy) ou se a drop-down list está desativada .disabled tbm retorna falso. Resumo: se a chave do objeto tiver a chave required e não tiver opcão marcada ou estiver desativada retorna falso. (trabalhando com truthy e falsy)
    return false;
  }

  return true;
}

// Validação radio button
function radioValidation(radio, name) {// Apenas verifica se há uma opção selecionada e retorna verdadeiro se sim ou falso se não
  let checked = document.querySelector(`[name=${name}]:checked`);// The checked property sets or returns the checked state of a checkbox. Armazena o item selecionado do radio button. Busca no HTML.

  if (checked === null) {
    return false;
  }

  return true;
}

// Verifica as chaves do objeto form(conforme parâmetro) e direciona para o objeto validationStrategies que aponta para a função de validação cfe o type
function validateInput(inputName) {// É chamada na funcção validateData e recebe como parâmetro o nome das variáveis do objeto form por meio de um for.
  let inputType = form[inputName].type;//pega o type do objeto form
  let input = document.querySelector(`name=${inputName}`);//pega o name do input no html que seja igual ao parâmetro da função

  if (inputType) {//só diz se inputType(key:type) existe no objeto form, ou seja, se retorna true. Vai funcionar para select, radio e date
    let validationFunction = validationStrategies[inputType];//busca o tipo de input no objeto validationStrategies que chama a função de validação de cada type
    return validationFunction(input, inputName)// Retorna a função validationFunction indicando seus respectivos parâmetros. Descobrir o que ela faz
  }
  return validationStrategies.default(input, inputName) // Será executada para as entradas do objeto form que não tem type, ou seja os type="text";
}

// Objeto com tipos(type) de input que chama a função de validação de cada tipo. Sendo default o input com type="text" que nesse exercício apresenta os atributos required e max-length.
let validationStrategies = {
  default: defaultValidation, // É definida sua chamada na função function validateInput(inputName) quando não há um type específicado no objeto form. Assim se cobre todos os tipos de input presentes no formulário(default(text), date, select e radio). É criada uma função de validação para cada tipo que é chamada neste objeto.
  date: dateValidation,
  select: selectValidation,
  radio: radioValidation,
}

// Validação geral de dados?
function validateData() {
  let validationList = {};
  for (let inputName in form) {// Passa por todas as chaves do objeto form chamando a função validateInput para cada uma delas.
    let isValid = validateInput(inputName); //O parâmentro inputName vem no nome das chaves do form. Todas as validações de type retornam verdadeiro ou falso, exceto pela data que retorna, qdo falso, msg de erro. 
    validationList[inputName] = isValid; //Portanto, atribui para o objeto validationList o nome das chaves do objeto form(inputName) bem como a elas dá o valor true ou false(resultado da função validateInput inserido na variável isValid).
  }

  let counter = 0;
  let messages = [];

  for (let index in validationList) {
    if (validationList[index] === false) {
      counter += 1;
      messages.push(validationList[index].message);//atualiza o array messages com a msg de erro, qdo houver, dentro da validationList
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();// função que agrupa todas a validações?

  if (validation.errorQtd === 0) {// descobrir esse . errorQtd
    renderData();// função que cria div com informações do firmulário
  } else {
    validation.messages.unshift('Dados inválidos'); //unshift() adiciona ao início do array a mensagem Dados inválidos. Descobrir qual array, mas está ligada a função validateData()
    renderErrorMessages(validation.messages)// provavelmente renderiza as mensagem (manda para tela). Descobrir relação entre validation(resultado da funçãO validateData() e messages (é criada em validateData())
  }
}

window.onload = function() {
  createStatesOptions();
  let submit = document.getElementById('submit', handleSubmit);
  submit.addEventListener('click', );
}
