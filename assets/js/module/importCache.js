

function gravar(num, chave) {
  localStorage.setItem('valor', num);
  localStorage.setItem('retVal', retVal);
  localStorage.setItem('chaveRecarga', chave)
  let divisao = Math.floor((num / 4.40)).toFixed(0);
  let divisaoInt = Math.floor((num / 7.65)).toFixed(0);


  if (num < 4.39) {
    infoSaldo = `<p>Saldo insuficiente!<p>`;
  }else if(num <= 7.64){
    infoSaldo = `<p><span style="color:red">1</span> passagem de ônibus OU metrô!</p>`;
  }else if(num <= 8.79) {
    infoSaldo = `<p><span style="color:red">1</span> passagem de ônibus OU metrô!</p>
    <p>ou <span style="color:red">1</span> de Integração!</p>`;
  }else if(num <= 15.29) {
    infoSaldo = `<p><span style="color:red">${divisao}</span> passagens de ônibus OU metrô!</p>
    <p>ou <span style="color:red">1</span> de Integração!</p>`;
  }else if (num > 8.80){
    infoSaldo = `<p><span style="color:red">${divisao}</span> passagens de ônibus OU metrô!</p>
    <p>ou <span style="color:red">${divisaoInt}</span> de Integrações!</p>`;
  }

  localStorage.setItem('info', infoSaldo);

  if(localStorage.info){
    info.innerHTML = infoSaldo;
    document.querySelector('.c-historico__botao').removeAttribute('disabled')
  } else {
    info.innerHTML = `<p>Saldo insuficiente!<p>`
    hist.setAttribute('disabled', '');

  }
}
