import { $historicoBotaoUsoLimpar, $historicoExibirUso, $historicoBotaoUso } from './$acoes.js'

const clickBotaoUsoLimpar = $historicoBotaoUsoLimpar.addEventListener('click', alerta)

function alerta() {
  $historicoExibirUso.style.display = 'none';
  $historicoBotaoUsoLimpar.style.display = 'none';
  $historicoBotaoUso.setAttribute('disabled', '');
  $historicoExibirUso.innerHTML = '';
  let chaveUso = 0;
  localStorage.setItem('chaveUso', chaveUso);
  localStorage.removeItem('historicoUso');
}

export { clickBotaoUsoLimpar };
