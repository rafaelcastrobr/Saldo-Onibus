import infoSaldo from './infoSaldo.js';
//import historicoExibir from './historicoExibir.js';


export default function salvarNoCache(num, chave, valorAnterior) {
  
  localStorage.setItem('valor', num);
  localStorage.setItem('chaveRecarga', chave);
  localStorage.setItem('valorAnterior', valorAnterior);
  
  
  infoSaldo();
  
}