import { $voltarBotao, $saldoTotalExibir, $historicoExibir, $historicoExibirUso } from "./$acoes.js";
import infoSaldo from "./infoSaldo.js";

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


      let trueFalseRecarga = parseFloat(localStorage.chaveRecarga);
      let trueFalseUso = parseFloat(localStorage.chaveUso);

      if(trueFalseUso === 1) {
        let historicoArray = JSON.parse(localStorage.historicoUso);
        historicoArray.shift();
        localStorage.setItem('historicoUso', JSON.stringify(historicoArray));

        $historicoExibirUso.innerHTML = '';
        for (let pos in historicoArray) {
          $historicoExibirUso.innerHTML += `<p>${historicoArray[pos]}</p>`
        }
      }

      if (trueFalseRecarga === 1) {
        let historicoArray = JSON.parse(localStorage.historicoRecarga);
        historicoArray.shift();
        localStorage.setItem('historicoRecarga', JSON.stringify(historicoArray));

        $historicoExibir.innerHTML = ``;
        for (let pos in historicoArray) {
          $historicoExibir.innerHTML += `<p class="yes">${historicoArray[pos]}</p>`;
        }
      }

      let chaveRecarga = 0;
      let chaveUso = 0;
      localStorage.setItem('valor', (valorAnterior).toFixed(2));
      localStorage.setItem('chaveRecarga', chaveRecarga);
      localStorage.setItem('valorAnterior', (valorAnterior).toFixed(2));
      localStorage.setItem('chaveUso', chaveUso);
      infoSaldo();

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