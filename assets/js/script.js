const saldoTotal = document.querySelector('.c-saldo__result');
let total = 0.00;

//saldoTotal.innerHTML = total;
let retVal;
let valorAdd;
let saveB;


/*
LocalStorage
*/


function gravar(num) {
  localStorage.setItem('valor', num);

}

function gr() {
  saveB = localStorage.valor;
  saldoTotal.innerHTML = saveB;
}
gr()





/*
USOU BILHETE
*/

// botao ônibus ou metrô
const oOM = document.querySelector('.c-usar__botao__um');
oOM.addEventListener('click', () => {
  const saldoTotal = document.querySelector('.c-saldo__result');

  if (total >= 4.39) {
    let valor = 4.40;
    total -= valor;
    let totalText = total.toFixed(2);
    saldoTotal.innerHTML = totalText;
    retVal = Number(totalText) + valor;
    document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
    gravar(totalText);
  } else {
    alert('Você está com saldo abaixo de 4.40 \n Faça uma recarga');
  }
});

// botao ônibus + metrô
const oOEM = document.querySelector('.c-usar__botao__dois');
oOEM.addEventListener('click', () => {
  const saldoTotal = document.querySelector('.c-saldo__result');

  if (total >= 7.64) {
    let valor = 7.65;
    total -= valor;
    totalText = total.toFixed(2);
    saldoTotal.innerHTML = totalText;
    retVal = Number(totalText) + valor;
    document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
    gravar(totalText);
  } else {
    alert('Você está com saldo abaixo de 7.65 \n Faça uma recarga');
  }
  
});

// botao voltar
const volt = document.querySelector('.c-usar__botao__tres');
volt.addEventListener('click', () => {
  saldoTotal.innerHTML = retVal.toFixed(2);
  total = retVal;
  const voltar = document.querySelector('.c-usar__botao__tres')
  voltar.setAttribute('disabled', '');
  gravar(retVal);
});

/*
RECARGA
*/

// Aparecer botão
const recar = document.querySelector('.c-carregar__botao__r');
recar.addEventListener('click', () => {
  const recarClic = document.querySelector('#recarregar');

  if (document.querySelector('.c-carregar__valor--none')) {
    recarClic.classList.remove('c-carregar__valor--none');
    recarClic.classList.add('c-carregar__valor');
    const addRecar = document.querySelector('.c-carregar__botao__valor');
    addRecar.focus();
  } else {
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
  }
});

// Add recarga OK

const okClic = document.querySelector('.c-carregar__botao__ok');
okClic.addEventListener('click', () =>{
  
  if(total !== Number) {
    const addRecar = document.querySelector('.c-carregar__botao__valor');
    const recarClic = document.querySelector('#recarregar');
    const audio = document.querySelector('audio');
    //audio.play();
    let valorAdd = Number(addRecar.value);
    total += valorAdd;
    let valor = total;
    let tstotal = total.toFixed(2);
    saldoTotal.innerHTML = tstotal;
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
    retVal = valor - valorAdd;
    document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
    addRecar.value = ``;
    gravar(tstotal);
  }
});

/*
ZERAR
*/

const zerar = document.querySelector('.c-zerar__botao');
zerar.addEventListener('click', () => {
  if(confirm('Quer mesmo apagar seu saldo?')) {
    total = Number(0.00.toFixed(2));
    saldoTotal.innerHTML = total;
    gravar(total);
  } 
})





