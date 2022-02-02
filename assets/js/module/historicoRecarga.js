import {geraData} from './geraData.js';
import { $historicoBotao, $historicoExibir, $historicoExibirUso } from './$acoes.js';


function historicoRecarga(valorRecarregado) {

  let historicoRecarga = `R$ ${valorRecarregado} no dia <span style="color:red;">${geraData()}</span>`;

  if (localStorage.historicoRecarga) {
    let historicoArray = JSON.parse(localStorage.historicoRecarga);
    
    historicoArray.unshift(historicoRecarga);
    localStorage.setItem('historicoRecarga', JSON.stringify(historicoArray));
    
    $historicoExibir.innerHTML = '';
    for (let pos in historicoArray) {
      $historicoExibir.innerHTML += `<p>${historicoArray[pos]}</p>`;
    }
  } else {
    let historicoArray = [];
    historicoArray.unshift(historicoRecarga);
    localStorage.setItem('historicoRecarga', JSON.stringify(historicoArray));

    for (let pos in historicoArray) {
      $historicoExibir.innerHTML += `<p>${historicoArray[pos]}</p>`;
    }
  }
}


const historicoBotao = $historicoBotao.addEventListener('click', () => {

  if (localStorage.historicoRecarga) {
    if ($historicoExibir.style.display === 'none') {
      $historicoExibir.style.display = 'flex';
    } else {
      $historicoExibir.style.display = 'none';
    }
  } else {
    Swal.fire({
      text: `Você não possui recargas para exibir`,
      icon: 'info',
      width: '20rem',
      showConfirmButton: false,
      timer: 2500
    })
  }

  if ($historicoExibirUso.style.display === 'flex') {
    $historicoExibirUso.style.display = 'none';
  }
});

export { historicoRecarga, historicoBotao }