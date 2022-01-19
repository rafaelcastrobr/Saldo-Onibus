import { $useiOnibusEMetro, $useiOnibusOUMetro } from "./$acoes.js";
import { onibusOuMetro, onibusMaisMetro} from "./valores.js";
import { $saldoTotalExibir, $voltarBotao } from './$acoes.js'
import salvarNoCache from "./salvarNoCache.js";

const useiOnibusOUMetro = $useiOnibusOUMetro.addEventListener('click', () => {

  let total = localStorage.valor? (Number(localStorage.valor)).toFixed(2) : 0.00;
  console.log('total: ', total + 5);
  console.log('onibusOuMetro: ',typeof  onibusOuMetro);

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
            total -= onibusOuMetro;
            $saldoTotalExibir.innerHTML = total;
            $voltarBotao.removeAttribute('disabled');
            let chaveRecarga = 0;
            let valorVoltar = total + valor;
            salvarNoCache(total, chaveRecarga, valorVoltar);

            Swal.fire({
              title: 'Atualizado',
              icon: 'success',
              width: '28rem',
              showConfirmButton: false,
              timer: 1000

            })
          }
    })
  }else {
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
  
  let total = localStorage.valor? (+localStorage.valor).toFixed(2) : 0.00;

  if (total >= onibusMaisMetro) {
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
            total -= onibusMaisMetro;
            $saldoTotalExibir.innerHTML = total;
            $voltarBotao.removeAttribute('disabled');
            let chaveRecarga = 0;
            let valorVoltar = total + valor;
            salvarNoCache(total, chaveRecarga, valorVoltar);

            Swal.fire({
              title: 'Atualizado',
              icon: 'success',
              width: '28rem',
              showConfirmButton: false,
              timer: 1000

            })
          }
    })
  }else {
    Swal.fire({
      text: `Saldo abaixo de r$${onibusMaisMetro} ( Faça uma recarga )`,
      icon: 'info',
      width: '28rem',
      showConfirmButton: false,
      timer: 2500

    })
  }

})


export { useiOnibusOUMetro, useiOnibusEMetro};