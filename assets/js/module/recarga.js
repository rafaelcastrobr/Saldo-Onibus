import { $recargaBotao, $historicoBotao, $addRecarga, $audio, $okClick, $saldoTotalExibir, $voltarBotao, $inputRecarga, $zerarDisabled } from './$acoes.js';
import { historicoRecarga } from './historicoRecarga.js';
import infoSaldo from './infoSaldo.js';


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
    let chaveUso = 0;

    //historico

    localStorage.setItem('valor', (total).toFixed(2));
    localStorage.setItem('chaveRecarga', chaveRecarga);
    localStorage.setItem('valorAnterior', (valorAnterior).toFixed(2));
    localStorage.setItem('chaveUso', chaveUso);
    infoSaldo();
    historicoRecarga(valorRecarregado);

    $zerarDisabled.removeAttribute('disabled', '');

  }
});

export { recargaBotao, okClick }