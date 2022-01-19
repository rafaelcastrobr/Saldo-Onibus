import infoSaldo from './infoSaldo.js';
import historicoExibir from './historicoExibir.js';


export default function salvarNoCache(num, chave, valorTotal) {
  
  localStorage.setItem('valor', num);
  localStorage.setItem('chaveRecarga', chave);
  localStorage.setItem('valorTotal', valorTotal);
  
  infoSaldo();
  historicoExibir();
  
}