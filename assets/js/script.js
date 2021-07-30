const saldoTotal = document.querySelector('.c-saldo__result');
let histResult = document.querySelector('.c-historico__result--none')
const hist = document.querySelector('.c-historico__botao');


let total;
let retVal;
let saveB;
let infoSaldo;
let recarA = [];
let diaA = [];

/*
LocalStorage
*/

// valor e info
function gravar(num) {
  localStorage.setItem('valor', num);
  let divisao = (num / 4.40).toFixed(0);
  let divisaoInt = (num/7.65).toFixed(0);


  if (num < 4.39) {
    infoSaldo = `<p>Saldo insuficiente!<p>`;
  }else if(num <= 7.64){
    infoSaldo = `<p><span style="color:red">1</span> passagem de ônibus!</p>`;
  }else if(num <= 8.79) {
    infoSaldo = `<p><span style="color:red">1</span> passagem de ônibus</p>
    <p>ou <span style="color:red">1</span> de Integração!</p>`;
  }else if(num <= 15.29) {
    infoSaldo = `<p><span style="color:red">${divisao}</span> passagens de ônibus</p>
    <p>ou <span style="color:red">1</span> de Integração!</p>`;
  }else if (num > 8.80){
    infoSaldo = `<p><span style="color:red">${divisao}</span> passagens de ônibus</p>
    <p>ou <span style="color:red">${divisaoInt}</span> de Integrações!</p>`;
  }

  localStorage.setItem('info', infoSaldo);

  if(localStorage.info){
    info.innerHTML = infoSaldo;
    document.querySelector('.c-historico__botao').removeAttribute('disabled')
  } else {
    info.innerHTML = `<p>Saldo insuficiente!<p>`
    hist.setAttribute('disabled', '');

  }
}

const info = document.querySelector('.c-historico__info');
(function gr() {
  if(localStorage.valor) {
  saveB = localStorage.valor;
  saldoTotal.innerHTML = Number(saveB).toFixed(2);
  total = Number(saveB);
  } else {
    total = 0.00;
    saldoTotal.innerHTML = total.toFixed(2);
  }

  if(localStorage.info) {
    infoSaldo = localStorage.info;
    info.innerHTML = infoSaldo;
    document.querySelector('.c-historico__botao').removeAttribute('disabled')
  } else{
    info.innerHTML = `<p>Saldo insuficiente!</p>`;
    hist.setAttribute('disabled', '');
  }
})();

// recarga
function gravarRA(num){
  let data = new Date();
  let dia = addZero(data.getDate());
  let mes = addZero(data.getMonth());
  let ano = addZero(data.getFullYear());

  function addZero(num) {
    return num >= 10 ? num : `0${num}`;
  }

  let week = `${dia}-${mes}-${ano}`

  let rec = `R$  ${num.toFixed(2)} no dia <span style="color:red;">${week}</span>`;

  recarA.push(rec);
  localStorage.setItem('recarga', JSON.stringify(recarA));
}

(function rs() {
  if(localStorage.recarga) {
    recarA = JSON.parse(localStorage.recarga);
    histResult.innerHTML += `Recargas`
    for(pos in recarA) {
        histResult.innerHTML += `<p class="yes">${recarA[pos]}</p>`;
    }
  } else {
    recarA = [];
  }
  
})();

/*
USOU BILHETE
*/

// botao ônibus ou metrô
const oOM = document.querySelector('.c-usar__botao__um');
oOM.addEventListener('click', () => {

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
const voltar = document.querySelector('.c-usar__botao__tres')
const volt = document.querySelector('.c-usar__botao__tres');
volt.addEventListener('click', () => {
  saldoTotal.innerHTML = retVal.toFixed(2);
  total = retVal;
  voltar.setAttribute('disabled', '');
  gravar(retVal);
});

/*
RECARGA
*/

// Aparecer botão
const recarClic = document.querySelector('#recarregar');
const recar = document.querySelector('.c-carregar__botao__r');
recar.addEventListener('click', () => {

  if (document.querySelector('.c-carregar__valor--none')) {
    recarClic.classList.remove('c-carregar__valor--none');
    recarClic.classList.add('c-carregar__valor');
    addRecar.focus();
  } else {
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
  }
});

// Add recarga OK
const addRecar = document.querySelector('.c-carregar__botao__valor');
const okClic = document.querySelector('.c-carregar__botao__ok');
okClic.addEventListener('click', () =>{
  
  if(addRecar.value.length == 0){
    alert('Digite um valor');
    return;
  }

  if(addRecar.value <= 0) {
    alert('Digite um novo valor')
    addRecar.value = ``;
    addRecar.focus();
    return;
  }
  if(total !== Number) {
    const audio = document.querySelector('audio');
    audio.play();
    audio.volume = 0.1;
    let valorAdd = Number(addRecar.value);
    total += valorAdd;
    let valor = total;
    let tstotal = total.toFixed(2)
    saldoTotal.innerHTML = tstotal;
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
    retVal = valor - valorAdd;
    document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
    addRecar.value = ``;
    gravar(tstotal);

    //historico
    gravarRA(valorAdd);
    histResult.innerHTML = ``;
    histResult.innerHTML += `Recargas`
    for(pos in recarA) {
        histResult.innerHTML += `<p class="yes">${recarA[pos]}</p>`;
    }

  }
});

/*
HISTORICO
*/

const idHist = document.querySelector('#historico');
hist.addEventListener('click', () => {

  if(document.querySelector('.yes')) {
    if (document.querySelector('.c-historico__result--none')) {
      idHist.classList.remove('c-historico__result--none');
      idHist.classList.add('c-historico__result');
    } else {
      idHist.classList.remove('c-historico__result')
      idHist.classList.add('c-historico__result--none');
    }
  } else {
    alert('Você não possui recargas para exibir!')
  }
});

/*
ZERAR
*/

const zerar = document.querySelector('.c-zerar__botao');
zerar.addEventListener('click', () => {
  if(confirm('Quer mesmo apagar seu saldo?')) {
    total = Number(0.00);
    saldoTotal.innerHTML = total.toFixed(2);
    gravar(total);
    localStorage.removeItem('valor');
    voltar.setAttribute('disabled', '');


    //historico
    histResult.innerHTML = ``;
    localStorage.removeItem('recarga');
    recarA = [];

    info.innerHTML = `<p>Saldo insuficiente!</p>`
    localStorage.removeItem('info');
    hist.setAttribute('disabled', '');

  }
  

  if(document.querySelector('.c-carregar__valor')) {
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
  }

  if (document.querySelector('.c-historico__result')) {
    idHist.classList.remove('c-historico__result')
    idHist.classList.add('c-historico__result--none');
  }
})