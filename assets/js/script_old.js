
// $saldoTotalExibir, $historicoExibir, $historicoBotao, $zerarDisabled
const saldoTotal = document.querySelector('.c-saldo__result');
let histResult = document.querySelector('.c-historico__result--none')
const hist = document.querySelector('.c-historico__botao');
const zerarAp = document.querySelector('#zerar_botao');


let total;
let retVal;
let saveB;
let infoSaldo;
let valorAdd;
let valor;
let recarA = [];
let diaA = [];
let chaveRecarga;

/*
LocalStorage
*/

// valor e info
function gravar(num, chave) {
  localStorage.setItem('valor', num);
  localStorage.setItem('retVal', retVal);
  localStorage.setItem('chaveRecarga', chave)
  let divisao = Math.floor((num / 4.40)).toFixed(0);
  let divisaoInt = Math.floor((num / 7.65)).toFixed(0);


  if (num < 4.39) {
    infoSaldo = `<p>Saldo insuficiente!<p>`;
  }else if(num <= 7.64){
    infoSaldo = `<p><span style="color:red">1</span> passagem de ônibus OU metrô!</p>`;
  }else if(num <= 8.79) {
    infoSaldo = `<p><span style="color:red">1</span> passagem de ônibus OU metrô!</p>
    <p>ou <span style="color:red">1</span> de Integração!</p>`;
  }else if(num <= 15.29) {
    infoSaldo = `<p><span style="color:red">${divisao}</span> passagens de ônibus OU metrô!</p>
    <p>ou <span style="color:red">1</span> de Integração!</p>`;
  }else if (num > 8.80){
    infoSaldo = `<p><span style="color:red">${divisao}</span> passagens de ônibus OU metrô!</p>
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

// $infoSobreSaldo $voltarBotao

const info = document.querySelector('.c-historico__info'); //botao historico
const voltar = document.querySelector('#voltar_saldo'); // botao voltar

(function gr() {
  if(localStorage.valor) {
  saveB = localStorage.valor;
  saldoTotal.innerHTML = Number(saveB).toFixed(2);
  total = Number(saveB);
  } else {
    total = 0.00;
    saldoTotal.innerHTML = total.toFixed(2);
    zerarAp.setAttribute('disabled', '');
  }

  if(localStorage.info) {
    infoSaldo = localStorage.info;
    info.innerHTML = infoSaldo;
    document.querySelector('.c-historico__botao').removeAttribute('disabled')
  } else{
    info.innerHTML = `<p>Saldo insuficiente!</p>`;
    hist.setAttribute('disabled', '');
  }

  if(localStorage.retVal) {
    retVal = localStorage.retVal;
  } else {
    voltar.setAttribute('disabled', '');
  }

  if(localStorage.chaveRecarga) {
    if(Number(localStorage.retVal) === Number(localStorage.valor)) {
      voltar.setAttribute('disabled', '');
    }
    chaveRecarga = Number(localStorage.chaveRecarga);
  } else {
    voltar.setAttribute('disabled', '');
    chaveRecarga = 0;
  }


})();

// GERADOR DATA GRAVADOR
function gravarRA(num){
  let data = new Date();
  let dia = addZero(data.getDate());
  let mes = addZero(Number(data.getMonth())+1);
  let ano = addZero(data.getFullYear());

  function addZero(num) {
    return num >= 10 ? num : `0${num}`;
  }

  let week = `${dia}-${mes}-${ano}`

  let rec = `R$  ${num.toFixed(2)} no dia <span style="color:red;">${week}</span>`;

  recarA.unshift(rec);
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
  if (total > 4.40) {
    Swal.fire({
      title: 'Utilizou o Bilhete?',
      text: "Sera descontado r$4.40",
      icon: 'warning',
      width: '28rem',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, usei',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
            valor = 4.40;
            total -= valor;
            let totalText = total.toFixed(2);
            saldoTotal.innerHTML = totalText;
            retVal = Number(totalText) + valor;
            document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
            chaveRecarga = 0;
            gravar(totalText, chaveRecarga);


            Swal.fire({
              title: 'Atualizado',
              icon: 'success',
              width: '28rem',
              showConfirmButton: false,
              timer: 1000

            })
          }
    })
  }else {
    Swal.fire({
      text: 'Saldo abaixo de r$4.40 ( Faça uma recarga )',
      icon: 'info',
      width: '28rem',
      showConfirmButton: false,
      timer: 2500

    })
  }
})
/*
oOM.addEventListener('click', () => {

  if (total >= 4.39) {
    if(confirm('Utilizou o bilhete?')){
      valor = 4.40;
      total -= valor;
      let totalText = total.toFixed(2);
      saldoTotal.innerHTML = totalText;
      retVal = Number(totalText) + valor;
      document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
      chaveRecarga = 0;
      gravar(totalText, chaveRecarga);
    }
  } else {
    alert('Você está com saldo abaixo de 4.40 \n Faça uma recarga');
  }
});

*/

// botao ônibus + metrô
const oOEM = document.querySelector('.c-usar__botao__dois');
oOEM.addEventListener('click', () => {

  if (total >= 7.64) {
    if(confirm('Utilizou o bilhete?')){
      valor = 7.65;
      total -= valor;
      totalText = total.toFixed(2);
      saldoTotal.innerHTML = totalText;
      retVal = Number(totalText) + valor;
      document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
      chaveRecarga = 0;
      gravar(totalText, chaveRecarga);
    
    }
  } else {
    alert('Você está com saldo abaixo de 7.65 \n Faça uma recarga');
  }
  
});

// botao voltar
const volt = document.querySelector('.c-usar__botao__tres');
volt.addEventListener('click', () => {
  let valorClick = Number(retVal).toFixed(2);

  if(confirm(`Deseja voltar ao valor anterior R$ ${valorClick}?`)) {
    saldoTotal.innerHTML = Number(retVal).toFixed(2);
    total = retVal;
    voltar.setAttribute('disabled', '');
    
    
    let trueFalse = Number(localStorage.chaveRecarga);
  
    if(trueFalse === 1){
      recarA.shift();
      localStorage.setItem('recarga', JSON.stringify(recarA));
      recarA = JSON.parse(localStorage.recarga);
      histResult.innerHTML = ``;
      histResult.innerHTML += `Recargas`
      for(pos in recarA) {
          histResult.innerHTML += `<p class="yes">${recarA[pos]}</p>`;
      }
    }
  
    chaveRecarga = 0;
    gravar(retVal, chaveRecarga);
  };
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
    valorAdd = Number(addRecar.value);
    let totalNumero = Number(total);
    totalNumero += valorAdd;
    valor = totalNumero;
    total = String(totalNumero);
    let tstotal = totalNumero.toFixed(2);
    saldoTotal.innerHTML = tstotal;
    recarClic.classList.remove('c-carregar__valor');
    recarClic.classList.add('c-carregar__valor--none');
    retVal = valor - valorAdd;
    document.querySelector('.c-usar__botao__tres').removeAttribute('disabled');
    addRecar.value = ``;
    chaveRecarga = 1;
    gravar(tstotal, chaveRecarga);

    //historico
    gravarRA(valorAdd);
    histResult.innerHTML = ``;
    histResult.innerHTML += `Recargas`
    for(pos in recarA) {
        histResult.innerHTML += `<p class="yes">${recarA[pos]}</p>`;
    }

    document.querySelector('#zerar_botao').removeAttribute('disabled', '');

    //chaveRecarga
    

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
  if(confirm('Deseja Limpar os dados?')) {
    total = Number(0.00);
    saldoTotal.innerHTML = total.toFixed(2);
    gravar(total);
    localStorage.removeItem('valor');
    localStorage.removeItem('retVal');
    localStorage.removeItem('chaveRecarga')
    voltar.setAttribute('disabled', '');


    //historico
    histResult.innerHTML = ``;
    localStorage.removeItem('recarga');
    recarA = [];

    info.innerHTML = `<p>Saldo insuficiente!</p>`
    localStorage.removeItem('info');
    hist.setAttribute('disabled', '');
    
    //zerar
    zerarAp.setAttribute('disabled', '');
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