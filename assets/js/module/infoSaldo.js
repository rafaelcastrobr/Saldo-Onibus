import { onibusMaisMetro, onibusOuMetro } from './valores.js';
import { $infoSobreSaldo } from './$acoes.js'


export default function infoSaldo() {

  let divisaoTradicional = Math.floor((parseFloat(localStorage.valor) / +onibusOuMetro)).toFixed(0);
  let divisaoIntegracao = Math.floor((parseFloat(localStorage.valor) / +onibusMaisMetro)).toFixed(0);

  if (parseFloat(localStorage.valor) < 4.40) {
    localStorage.setItem('info', `<p>Saldo insuficiente!<p>`);
    $infoSobreSaldo.innerHTML = `<p>Saldo insuficiente!</p>`;

  } else {
    localStorage.setItem('info', `<p>Ônibus OU Metrô <span style="color:red"> ${divisaoTradicional}</span></p>
      <p>Ônibus + Metrô <span style="color:red"> ${divisaoIntegracao}</span></p>`);
    $infoSobreSaldo.innerHTML = localStorage.info;
  }

}