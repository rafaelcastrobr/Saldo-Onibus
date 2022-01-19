import { onibusMaisMetro, onibusOuMetro } from './valores.js';


export default function infoSaldo() {

  let divisaoTradicional = Math.floor((localStorage.valor / onibusOuMetro)).toFixed(0);
  let divisaoIntegracao = Math.floor((localStorage.valor / onibusMaisMetro)).toFixed(0);

  if (localStorage.valor < 4.40) {
    return localStorage.setItem('info', `<p>Saldo insuficiente!<p>`);
  } else {
    return localStorage.setItem('info', `<p>Ônibus OU Metrô<span style="color:red">${divisaoTradicional}</span></p>
      <p>Ônibus ++ Metrô <span style="color:red">${divisaoIntegracao}</span></p>`);
  }

}