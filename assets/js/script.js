const saldoTotal = document.querySelector('.c-saldo__result');
let total = 20.00
saldoTotal.innerHTML = total.toFixed(2);

// botao ônibus ou metrô
const oOM = document.querySelector('.c-usar__botao__um');
oOM.addEventListener('click', () => {
  const saldoTotal = document.querySelector('.c-saldo__result');

  if (total >= 4.39) {
    let valor = 4.40;
    total -= valor;
    saldoTotal.innerHTML = total.toFixed(2);
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
    saldoTotal.innerHTML = total.toFixed(2);
  } else {
    alert('Você está com saldo abaixo de 7.65 \n Faça uma recarga');
  }
  
});