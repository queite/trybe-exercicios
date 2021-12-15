import './node_modules/just-validate/dist/just-validate.production.min.js'

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

function clear() {
  let input = document.getElementsByTagName('input');
  let textarea = document.querySelector('textarea');
  for (let i= 0; i < input.length; i += 1) {
    input[i].value= '';
  }
  textarea.value = '';
}

window.onload = function() {
  createStateOptions();

  var picker = new Pikaday({ field: document.getElementById('datepicker') });

  document.getElementById('clear').addEventListener('click', clear);

  let validationForm = new JustValidate('#cv-form');
  
  validationForm
  .addField('#name', [{
    rule: 'maxLength',
    value: 40,
  },
  {
    rule: 'required',
    errorMessage: 'Nome obrigatório',
  }])
  .addField('#email', [{
    rule: 'maxLength',
    value: 50, 
  },
  {
    rule: 'required',
    errorMessage: 'E-mail obrigatório',
  }
  ])
  .addField('#cpf', [{
    rule: 'maxLength',
    value: 11, 
  },
  {
    rule: 'required',
    errorMessage: 'CPF obrigatório',
  }
  ])
  .addField('#address', [{
    rule: 'maxLength',
    value: 200, 
  },
  {
    rule: 'required',
    errorMessage: 'Endereço obrigatório',
  }
  ])
  .addField('#city', [{
    rule: 'maxLength',
    value: 28, 
  },
  {
    rule: 'required',
    errorMessage: 'Cidade obrigatória',
  }
  ])
  .addField('#state', [{
    rule: 'required',
    errorMessage: 'Estado obrigatório',
  }
  ])
  .addRequiredGroup('#radio-group')
  .addField('#resume', [{
    rule: 'maxLength',
    value: 1000, 
  },
  {
    rule: 'required',
    errorMessage: 'Resumo obrigatório',
  }
  ])
  .addField('#role', [{
    rule: 'maxLength',
    value: 40, 
  },
  {
    rule: 'required',
    errorMessage: 'Cargo obrigatório',
  }
  ])
  .addField('#roleDescription', [{
    rule: 'maxLength',
    value: 500, 
  },
  {
    rule: 'required',
    errorMessage: 'Descrição obrigatória',
  }
  ])
  .addField('#datepicker', [{
    rule: 'required',
    errorMessage: 'Data obrigatória',
  }
  ]);

}