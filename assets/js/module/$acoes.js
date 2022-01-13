//Locais do HTML


const $saldoTotalExibir = document.querySelector('.c-saldo__result');


const $infoSobreSaldo = document.querySelector('.c-historico__info');



const $voltarBotao = document.querySelector('#voltar_saldo'); // botao voltar



let $historicoExibir = document.querySelector('.c-historico__result--none')
const $historicoBotao = document.querySelector('.c-historico__botao');


const $zerarDisabled = document.querySelector('#zerar_botao');


export { 
  $saldoTotalExibir,
  $historicoBotao,
  $historicoExibir,
  $zerarDisabled,
  $infoSobreSaldo,
  $voltarBotao
};