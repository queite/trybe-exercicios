window.onload = function() {
  function changeBackground() {
    let backColorSelector = document.getElementById('banckground.color'); // seleciona select
    backColorSelector.addEventListener('change', function() {   //adicona evento de mudança
      let body = document.getElementsByTagName('body');  //seleciona body
      let selected = backColorSelector.selectedOptions[0];  //seleciona a opção (option) escolhida do select (selectOptions) - neste caso será sempre [0] pq não é seleção multipla
      body[0].style.backgroundColor = selected.value;
      
      localStorage.setItem('backgroundColor', selected.value); // salva chave em localStorage
    })
  }
  changeBackground();

  function changeText() {
    let text = document.getElementsByClassName('text');
    let textColorSelector = document.getElementById('text-color');
    let fontSizeInput = document.getElementById('font-size');
    let lineHeightInput = document.getElementById('line-height');
    let fontSelector = document.getElementById('font');

    textColorSelector.addEventListener('change', function() {
      let selected = textColorSelector.selectedOptions[0];
      for (let i = 0; i < text.length; i += 1) {
        text[i].style.color = selected.value;
      }
      localStorage.setItem('textColor', selected.value);
    })

    function chageFontSize() {
      fontSizeInput.addEventListener('change', function() {
        for (let i = 0; i < text.length; i += 1) {
          text[i].style.fontSize = `${fontSizeInput.value}px`;
        }
        localStorage.setItem('fontSize', `${fontSizeInput.value}px`);
      })
    }
    chageFontSize();

    function chagelineHeight() {
      lineHeightInput.addEventListener('change', function() {
        for (let i = 0; i < text.length; i += 1) {
          text[i].style.lineHeight = `${lineHeightInput.value}px`;
        }
        localStorage.setItem('lineHeight', `${lineHeightInput.value}px`);
      })
    }
    chagelineHeight();

    function changeFont() {
      fontSelector.addEventListener('change', function() {
        let selectedFont = fontSelector.selectedOptions[0];
        for (let i = 0; i < text.length; i += 1) {
        text[i].style.fontFamily = selectedFont.value;
        }
        localStorage.setItem('font', selectedFont.value);
      })
    }
    changeFont();
  }
  changeText();
  
  //recuperalção de chaves do localStorage
  document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
  let text = document.getElementsByClassName('text');
  for (let i = 0; i < text.length; i += 1) {
    text[i].style.color = localStorage.getItem('textColor');
  }
  for (let i = 0; i < text.length; i += 1) {
    text[i].style.fontSize = localStorage.getItem('fontSize');
  }
  for (let i = 0; i < text.length; i += 1) {
    text[i].style.fontFamily = localStorage.getItem('font');
    }
  for (let i = 0; i < text.length; i += 1) {
    text[i].style.lineHeight = localStorage.getItem('lineHeight');
  }
}