import { geraDataUso } from './geraData.js';
import { $historicoBotaoUso, $historicoExibirUso, $historicoExibir, $historicoBotaoRecargaLimpar, $historicoBotaoUsoLimpar } from './$acoes.js';


function historicoRecargaUso(valorUsado) {

  let historicoUso = `<span style="color:red;">${valorUsado.toFixed(2)}</span> ${geraDataUso()}`;


  if (localStorage.historicoUso) {
    let historicoArray = JSON.parse(localStorage.historicoUso);

    historicoArray.unshift(historicoUso);
    localStorage.setItem('historicoUso', JSON.stringify(historicoArray));

    $historicoExibirUso.innerHTML = '';
    for (let pos in historicoArray) {
      $historicoExibirUso.innerHTML += `<p>${historicoArray[pos]}</p>`;
    }
  } else {
    let historicoArray = [];
    historicoArray.unshift(historicoUso);
    localStorage.setItem('historicoUso', JSON.stringify(historicoArray));

    for (let pos in historicoArray) {
      $historicoExibirUso.innerHTML += `<p>${historicoArray[pos]}</p>`;
    }
  }
}


const historicoBotaoUso = $historicoBotaoUso.addEventListener('click', () => {

  if (localStorage.historicoUso) {
    if ($historicoExibirUso.style.display === 'none') {
      $historicoBotaoUsoLimpar.style.display = 'flex';
      $historicoExibirUso.style.display = 'flex';
    } else {
      $historicoExibirUso.style.display = 'none';
      $historicoBotaoUsoLimpar.style.display = 'none'
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

  if ($historicoExibir.style.display === 'flex') {
    $historicoExibir.style.display = 'none';
    $historicoBotaoRecargaLimpar.style.display = 'none';
  } 



});


export { historicoRecargaUso, historicoBotaoUso };