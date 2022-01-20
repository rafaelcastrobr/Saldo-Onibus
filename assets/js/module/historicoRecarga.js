import geraData from './geraData.js';

export default function historicoRecarga(valorRecarregado) {

  let historicoExibir = `R$ ${valorRecarregado} no dia <span style="color:red;">${geraData()}</span>`;

  const historicoDeRecargaSalvar = [];

  return historicoDeRecargaSalvar.unshift(historicoExibir);

  //localStorage.setItem('historicoRecarga', JSON.stringify(historicoDeRecargaSalvar));
}