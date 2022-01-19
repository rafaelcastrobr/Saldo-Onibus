//Locais do HTML

const $infoSobreSaldo = document.querySelector('.c-historico__info');
const $saldoTotalExibir = document.querySelector('.c-saldo__result');
const $historicoExibir = document.querySelector('.c-historico__result--none');


//Botoes

const $useiOnibusOUMetro = document.querySelector('.c-usar__botao__um');
const $useiOnibusEMetro = document.querySelector('.c-usar__botao__dois');

const $voltarBotao = document.querySelector('#voltar_saldo');

const $historicoBotao = document.querySelector('.c-historico__botao');

const $zerarDisabled = document.querySelector('#zerar_botao');


export { 
  $saldoTotalExibir,
  $historicoBotao,
  $historicoExibir,
  $zerarDisabled,
  $infoSobreSaldo,
  $voltarBotao,
  $useiOnibusEMetro,
  $useiOnibusOUMetro
};