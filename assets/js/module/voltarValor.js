import { $voltarBotao, $saldoTotalExibir, $historicoExibir } from "./$acoes.js";
import salvarNoCache from './salvarNoCache.js';


const voltarValor = $voltarBotao.addEventListener('click', () => {

  let valorAnterior = parseFloat(localStorage.valorAnterior);

  Swal.fire({
    text: `Deseja voltar ao valor anterior R$ ${valorAnterior.toFixed(2)}?`,
    icon: 'warning',
    width: '28rem',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {

      $saldoTotalExibir.innerHTML = (valorAnterior).toFixed(2);
      $voltarBotao.setAttribute('disabled', '');


      let trueFalse = parseFloat(localStorage.chaveRecarga);

      if (trueFalse === 1) {
        let historicoArray = JSON.parse(localStorage.historicoRecarga);
        historicoArray.shift();
        localStorage.setItem('historicoRecarga', JSON.stringify(historicoArray));

        $historicoExibir.innerHTML = ``;
        $historicoExibir.innerHTML += `Recargas`;
        for (let pos in historicoArray) {
          $historicoExibir.innerHTML += `<p class="yes">${historicoArray[pos]}</p>`;
        }
      }

      let chaveRecarga = 0;
      salvarNoCache(
        (valorAnterior).toFixed(2),
        chaveRecarga,
        (valorAnterior).toFixed(2)
        )


      Swal.fire({
        title: 'Atualizado',
        icon: 'success',
        width: '28rem',
        showConfirmButton: false,
        timer: 1000

      })
    }
  })


});

export { voltarValor }