import { $saldoTotalExibir, $historicoBotao, $zerarDisabled, $infoSobreSaldo, $voltarBotao } from './$acoes.js'

function buscarNoCache() {

  const resetValor = 0.00;

  if (localStorage.valor) {
    $saldoTotalExibir.innerHTML = (+localStorage.valor).toFixed(2);
  } else {
    $saldoTotalExibir.innerHTML = resetValor.toFixed(2);
    $zerarDisabled.setAttribute('disabled', '');
  };


  if (localStorage.info) {
    $infoSobreSaldo.innerHTML = localStorage.info;
    $historicoBotao.removeAttribute('disabled')
  } else {
    $infoSobreSaldo.innerHTML = `<p>Saldo insuficiente!</p>`;
    $historicoBotao.setAttribute('disabled', '');
  };



  if (localStorage.retVal === false) {
    $voltarBotao.setAttribute('disabled', '');
  };



  if (localStorage.chaveRecarga) {
    if (+localStorage.retVal === +localStorage.valor) {
      $voltarBotao.setAttribute('disabled', '');
    }
  } else {
    $voltarBotao.setAttribute('disabled', '');
  }
}

export { buscarNoCache };