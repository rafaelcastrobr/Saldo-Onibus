import { $recargaBotao, $recargaExibir, $historicoBotao, $addRecarga, $audio, $okClick, $saldoTotalExibir, $voltarBotao, $historicoExibir, $inputRecarga } from './$acoes.js';
import salvarNoCache from './salvarNoCache.js';
import { historicoRecarga } from './historicoRecarga.js'


//Aparecer input

const recargaBotao = $recargaBotao.addEventListener('click', () => {

  if ($inputRecarga.style.display === "none") {
    $inputRecarga.style.display = "flex"
    $addRecarga.focus();
  } else {
    $inputRecarga.style.display = "none";
  }
});



//Adc Recarga

const okClick = $okClick.addEventListener('click', () => {

  if ($addRecarga.value.length == 0) {

    Swal.fire({
      text: `Digite um valor`,
      icon: 'info',
      width: '20rem',
      showConfirmButton: false,
      timer: 2500

    })
    return;

  } else if ($addRecarga.value <= 0) {

    Swal.fire({
      text: `Digite um novo valor`,
      icon: 'info',
      width: '20rem',
      showConfirmButton: false,
      timer: 2500

    })
    $addRecarga.value = ``;
    $addRecarga.focus();
    return;

  } else {

    $audio.play();
    $audio.volume = 0.1;

    let valorRecarregado = parseFloat($addRecarga.value);
    let valorAnterior = localStorage.valorAnterior ? parseFloat(localStorage.valor) : 0;
    
    let total = localStorage.valor ? parseFloat(localStorage.valor) + valorRecarregado : 0 + valorRecarregado;
    $saldoTotalExibir.innerHTML = total.toFixed(2);

    if ($inputRecarga.style.display === "none") {
      $inputRecarga.style.display = "flex"
      $addRecarga.focus();
    } else {
      $inputRecarga.style.display = "none";
    }
    
    $voltarBotao.removeAttribute('disabled');
    $historicoBotao.removeAttribute('disabled')

    $addRecarga.value = ``;
    let chaveRecarga = 1;

    //historico

    salvarNoCache(
      (total).toFixed(2),
      chaveRecarga,
      (valorAnterior).toFixed(2),
    );

    historicoRecarga(valorRecarregado);
 
    document.querySelector('#zerar_botao').removeAttribute('disabled', '');

    //chaveRecarga
  }
});

export { recargaBotao, okClick }