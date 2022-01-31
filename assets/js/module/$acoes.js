//Locais do HTML

const $saldoTotalExibir = document.querySelector('.c-saldo__result');
const $infoSobreSaldo = document.querySelector('.c-historico__info');
const $inputRecarga = document.querySelector('.c-carregar__valor');
const $historicoExibir = document.querySelector('.c-historico__result');
const $historicoExibirEsconder = document.querySelector('#historico');


//Botoes

const $useiOnibusOUMetro = document.querySelector('.c-usar__botao__um');
const $useiOnibusEMetro = document.querySelector('.c-usar__botao__dois');

const $voltarBotao = document.querySelector('.c-usar__botao__tres');

const $recargaBotao = document.querySelector('.c-carregar__botao__r');
const $recargaExibir = document.querySelector('#recarregar');

const $okClick = document.querySelector('.c-carregar__botao__ok');

const $historicoBotao = document.querySelector('.c-historico__botao');


const $zerarDisabled = document.querySelector('#zerar_botao');


// input 
const $addRecarga = document.querySelector('.c-carregar__botao__valor');

// audio
const $audio = document.querySelector('audio');


export { 
  $saldoTotalExibir,
  $historicoBotao,
  $historicoExibir,
  $zerarDisabled,
  $infoSobreSaldo,
  $voltarBotao,
  $useiOnibusEMetro,
  $useiOnibusOUMetro,
  $recargaBotao,
  $recargaExibir,
  $addRecarga,
  $audio,
  $okClick,
  $historicoExibirEsconder,
  $inputRecarga
};