import { $saldoTotalExibir, $historicoBotao, $zerarDisabled, $infoSobreSaldo, $voltarBotao, $historicoExibir } from './$acoes.js';

export default function buscarNoCache() {

  const resetValor = 0.00;

  if (localStorage.valor) {
    $saldoTotalExibir.innerHTML = (+localStorage.valor).toFixed(2);
  } else {
    $saldoTotalExibir.innerHTML = resetValor.toFixed(2);
    $zerarDisabled.setAttribute('disabled', '');
  };


  if (localStorage.info) {
    $infoSobreSaldo.innerHTML = localStorage.info;
  } else {
    $infoSobreSaldo.innerHTML = `<p>Saldo insuficiente!</p>`;
    
  };



  if (!localStorage.valorTotal) {
    $voltarBotao.setAttribute('disabled', '');
  };



  if (localStorage.chaveRecarga) {
    if (+localStorage.valorTotal === +localStorage.valor) {
      $voltarBotao.setAttribute('disabled', '');
    }
  } else {
    $voltarBotao.setAttribute('disabled', '');
  }


  if(localStorage.historicoRecarga) {
    let historicoDeRecargaSalvar = JSON.parse(localStorage.historicoRecarga);
    $historicoExibir.innerHTML += `Recargas`
    for(pos in historicoDeRecargaSalvar) {
        $historicoExibir.innerHTML += `<p class="yes">${historicoDeRecargaSalvar[pos]}</p>`;
    }
  } else {
    $historicoBotao.setAttribute('disabled', '');
  }


}

