import { $saldoTotalExibir, $historicoBotao, $zerarDisabled, $infoSobreSaldo, $voltarBotao, $historicoExibir, $historicoExibirUso, $historicoBotaoUso } from './$acoes.js';

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



  if (localStorage.valorAnterior) {
    $voltarBotao.removeAttribute('disabled')
  } else {
    $voltarBotao.setAttribute('disabled', '');
  }



  if (localStorage.chaveRecarga) {
    if (+localStorage.valorTotal === +localStorage.valor) {
      $voltarBotao.setAttribute('disabled', '');
    }
  } else {
    $voltarBotao.setAttribute('disabled', '');
  }


  if(localStorage.historicoRecarga) {
    $historicoBotao.removeAttribute('disabled')
    let historicoDeRecargaSalvar = JSON.parse(localStorage.historicoRecarga);
    for(let pos in historicoDeRecargaSalvar) {
        $historicoExibir.innerHTML += `<p>${historicoDeRecargaSalvar[pos]}</p>`;
    }
  } else {
    $historicoBotao.setAttribute('disabled', '');
  }

  
    if(localStorage.historicoUso) {
      $historicoBotaoUso.removeAttribute('disabled')
      let historicoDeUsoSalvar = JSON.parse(localStorage.historicoUso);
      for(let pos in historicoDeUsoSalvar) {
          $historicoExibirUso.innerHTML += `<p>${historicoDeUsoSalvar[pos]}</p>`;
      }
    } else {
      $historicoBotaoUso.setAttribute('disabled', '');
    }


}

