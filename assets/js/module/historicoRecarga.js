import geraData from './geraData.js';
import { $historicoBotao, $historicoExibir, $historicoExibirEsconder } from './$acoes.js';


function historicoRecarga(valorRecarregado) {

  let historicoRecarga = `R$ ${valorRecarregado} no dia <span style="color:red;">${geraData()}</span>`;

  if (localStorage.historicoRecarga) {
    let historicoArray = JSON.parse(localStorage.historicoRecarga);
    
    historicoArray.unshift(historicoRecarga);
    localStorage.setItem('historicoRecarga', JSON.stringify(historicoArray));
    
    $historicoExibir.innerHTML = ``
    $historicoExibir.innerHTML += `Recargas`
    for (let pos in historicoArray) {
      $historicoExibir.innerHTML += `<p class="yes">${historicoArray[pos]}</p>`;
    }
  } else {
    let historicoArray = [];
    historicoArray.unshift(historicoRecarga);
    localStorage.setItem('historicoRecarga', JSON.stringify(historicoArray));

    $historicoExibir.innerHTML += `Recargas`
    for (let pos in historicoArray) {
      $historicoExibir.innerHTML += `<p class="yes">${historicoArray[pos]}</p>`;
    }
  }
}


const historicoBotao = $historicoBotao.addEventListener('click', () => {

  if (document.querySelector('.yes')) {
    if (document.querySelector('.c-historico__result--none')) {
      $historicoExibirEsconder.classList.remove('c-historico__result--none');
      $historicoExibirEsconder.classList.add('c-historico__result');
    } else {
      $historicoExibirEsconder.classList.remove('c-historico__result')
      $historicoExibirEsconder.classList.add('c-historico__result--none');
    }
  } else {
    alert('Você não possui recargas para exibir!')
  }
});

export { historicoRecarga, historicoBotao }