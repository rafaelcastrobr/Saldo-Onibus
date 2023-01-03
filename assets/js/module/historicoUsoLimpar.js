import { $historicoBotaoUsoLimpar, $historicoExibirUso,  $historicoExibir,$historicoBotao, $historicoBotaoUso, $historicoBotaoRecargaLimpar } from './$acoes.js'

const clickBotaoUsoLimpar = $historicoBotaoUsoLimpar.addEventListener('click', limparUso)
const clickBotaoRecargaLimpar = $historicoBotaoRecargaLimpar.addEventListener('click', limparRecarga)

function limparUso() {
  $historicoExibirUso.style.display = 'none';
  $historicoBotaoUsoLimpar.style.display = 'none';
  $historicoBotaoUso.setAttribute('disabled', '');
  $historicoExibirUso.innerHTML = '';
  let chaveUso = 0;
  localStorage.setItem('chaveUso', chaveUso);
  localStorage.removeItem('historicoUso');
}


function limparRecarga() {
  $historicoExibir.style.display = 'none';
  $historicoBotaoRecargaLimpar.style.display = 'none';
  $historicoBotao.setAttribute('disabled', '');
  $historicoExibir.innerHTML = '';
  let chaveUso = 0;
  localStorage.setItem('chaveRecarga', chaveUso);
  localStorage.removeItem('historicoRecarga');
}

export { clickBotaoUsoLimpar };
