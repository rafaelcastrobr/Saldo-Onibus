import { $useiOnibusEMetro, $useiOnibusOUMetro } from "./$acoes.js";
import { onibusOuMetro, onibusMaisMetro } from "./valores.js";
import { $saldoTotalExibir, $voltarBotao } from './$acoes.js'
import infoSaldo from './infoSaldo.js';

const useiOnibusOUMetro = $useiOnibusOUMetro.addEventListener('click', () => {

  let total = localStorage.valor ? (parseFloat(localStorage.valor)) : 0.00;

  if (total >= +onibusOuMetro) {
    Swal.fire({
      title: 'Utilizou o Bilhete?',
      text: "Sera descontado r$4.40",
      icon: 'warning',
      width: '28rem',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, usei',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        total -= +onibusOuMetro;
        $saldoTotalExibir.innerHTML = (total).toFixed(2);
        $voltarBotao.removeAttribute('disabled');
        let chaveRecarga = 0;
        let valorAnterior = total + (+onibusOuMetro);

        localStorage.setItem('valor', (total).toFixed(2));
        localStorage.setItem('chaveRecarga', chaveRecarga);
        localStorage.setItem('valorAnterior', (valorAnterior).toFixed(2));
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
  } else {
    Swal.fire({
      text: `Saldo abaixo de r$${onibusOuMetro} ( Faça uma recarga )`,
      icon: 'info',
      width: '28rem',
      showConfirmButton: false,
      timer: 2500

    })
  }
})

const useiOnibusEMetro = $useiOnibusEMetro.addEventListener('click', () => {

  let total = localStorage.valor ? (+localStorage.valor).toFixed(2) : 0.00;

  if (total >= +onibusMaisMetro) {
    Swal.fire({
      title: 'Utilizou o Bilhete?',
      text: "Sera descontado r$7.65",
      icon: 'warning',
      width: '28rem',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, usei',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        total -= +onibusMaisMetro;
        $saldoTotalExibir.innerHTML = (total).toFixed(2);
        $voltarBotao.removeAttribute('disabled');
        let chaveRecarga = 0;
        let valorAnterior = total + (+onibusMaisMetro);

        localStorage.setItem('valor', (total).toFixed(2));
        localStorage.setItem('chaveRecarga', chaveRecarga);
        localStorage.setItem('valorAnterior', (valorAnterior).toFixed(2));
        infoSaldo();


        Swal.fire({
          title: 'Atualizado',
          icon: 'success',
          width: '28rem',
          showConfirmButton: false,
          timer: 500

        })
      }
    })
  } else {
    Swal.fire({
      text: `Saldo abaixo de r$${onibusMaisMetro} ( Faça uma recarga )`,
      icon: 'info',
      width: '28rem',
      showConfirmButton: false,
      timer: 2500

    })
  }

})


export { useiOnibusOUMetro, useiOnibusEMetro };