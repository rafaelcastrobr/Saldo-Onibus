import { $zerarDisabled, $voltarBotao, $historicoBotao, $saldoTotalExibir, $infoSobreSaldo, $inputRecarga, $historicoExibir, $historicoBotaoUso, $historicoExibirUso, $historicoBotaoUsoLimpar } from './$acoes.js'

const zerarBotao = $zerarDisabled.addEventListener('click', () => {

  Swal.fire({
    title: 'Deseja Limpar os dados?',
    icon: 'warning',
    width: '28rem',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

      localStorage ? localStorage.clear() : console.log('não existo');

      $saldoTotalExibir.innerHTML = (0.00).toFixed(2);
      $infoSobreSaldo.innerHTML = '<p>Saldo insuficiente!</p>';
      $historicoExibir.innerHTML = ``;
      $historicoExibirUso.innerHTML = '';
      
      

      if ($inputRecarga.style.display === "flex") {
        $inputRecarga.style.display = "none"
      }
      
      if ($historicoExibir.style.display === 'flex') {
        $historicoExibir.style.display = 'none';
      }

      if ($historicoExibirUso.style.display === 'flex') {
        $historicoExibirUso.style.display = 'none';
        $historicoBotaoUsoLimpar.style.display = 'none';
      }

      $voltarBotao.setAttribute('disabled', '');
      $historicoBotao.setAttribute('disabled', '');
      $zerarDisabled.setAttribute('disabled', '')
      $historicoBotaoUso.setAttribute('disabled', '');

    }


  })
});

export { zerarBotao }