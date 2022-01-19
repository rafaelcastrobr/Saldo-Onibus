import geraData from './geraData.js';

export default function historicoExibir(num) {
  
  let historicoExibir = `R$  ${num.toFixed(2)} no dia <span style="color:red;">${geraData()}</span>`;
  
  const historicoDeRecargaSalvar = [];

  historicoDeRecargaSalvar.unshift(historicoExibir);
  
  return localStorage.setItem('historicoRecarga', JSON.stringify(historicoDeRecargaSalvar));
}