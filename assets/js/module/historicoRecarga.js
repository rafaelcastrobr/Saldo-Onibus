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
});

export { historicoRecarga, historicoBotao }