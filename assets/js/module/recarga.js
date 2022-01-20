import { $recargaBotao, $recargaExibir, $addRecarga, $audio, $okClick, $saldoTotalExibir, $voltarBotao, $historicoExibir } from './$acoes.js';
import salvarNoCache from './salvarNoCache.js';
import geraData from './geraData.js';


//Aparecer input
const recargaBotao = $recargaBotao.addEventListener('click', () => {

  if (document.querySelector('.c-carregar__valor--none')) {
    $recargaExibir.classList.remove('c-carregar__valor--none');
    $recargaExibir.classList.add('c-carregar__valor');
    $addRecarga.focus();
  } else {
    $recargaExibir.classList.remove('c-carregar__valor');
    $recargaExibir.classList.add('c-carregar__valor--none');
  }
});



//Adc Recarga

const okClick = $okClick.addEventListener('click', () => {

  if ($addRecarga.value.length == 0) {

    alert('Digite um valor');
    return;

  } else if ($addRecarga.value <= 0) {

    alert('Digite um novo valor')
    $addRecarga.value = ``;
    $addRecarga.focus();
    return;

  } else {

    $audio.play();
    $audio.volume = 0.1;

    let valorRecarregado = parseFloat($addRecarga.value);
    let valorAnterior = localStorage.valorAnterior? parseFloat(localStorage.valor): 0;
    let total = localStorage.valor ? parseFloat(localStorage.valor) + valorRecarregado : 0 + valorRecarregado;
    $saldoTotalExibir.innerHTML = total.toFixed(2);

    $addRecarga.classList.remove('c-carregar__valor');
    $addRecarga.classList.add('c-carregar__valor--none');
    $voltarBotao.removeAttribute('disabled');

    $addRecarga.value = ``;
    let chaveRecarga = 1;

    //historico

    let historicoRecarga = `R$ ${valorRecarregado} no dia <span style="color:red;">${geraData()}</span>`;

    if (localStorage.historicoRecarga) {
      let historicoArray = JSON.parse(localStorage.historicoRecarga);

      historicoArray.unshift(historicoRecarga);
      localStorage.setItem('historicoRecarga', JSON.stringify(historicoArray));

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

    salvarNoCache(
      (total).toFixed(2),
      chaveRecarga,
      (valorAnterior).toFixed(2),
    );

    document.querySelector('#zerar_botao').removeAttribute('disabled', '');

    //chaveRecarga


  }
});

export { recargaBotao, okClick }