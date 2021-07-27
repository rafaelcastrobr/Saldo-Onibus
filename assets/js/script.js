const saldoTotal = document.querySelector('.c-saldo__result');
let total = 0.00
let retVal;
let valorAdd;
saldoTotal.innerHTML = total.toFixed(2);

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
  } else {
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
  }
});

// Add recarga

const okClic = document.querySelector('.c-carregar__botao__ok');
okClic.addEventListener('click', () =>{
  
  if(total !== Number) {
    const addRecar = document.querySelector('.c-carregar__botao__valor');
    const recarClic = document.querySelector('#recarregar');
    let valorAdd = Number(addRecar.value);
    total += valorAdd;
    let valor = total;
    saldoTotal.innerHTML = total.toFixed(2);
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
    retVal = valor - valorAdd;
    document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
    addRecar.value = ``;
    console.log(retVal);
  }
});

/*
ZERAR
*/

const zerar = document.querySelector('.c-zerar__botao');
zerar.addEventListener('click', () => {
  if(confirm('Quer mesmo apagar seu saldo?')) {
    saldoTotal.innerHTML = total - total;
  } 
})
