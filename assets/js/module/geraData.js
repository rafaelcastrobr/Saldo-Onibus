function addZero(num) {
  return num >= 10 ? num : `0${num}`;
}

export function geraData(){
  let data = new Date();
  let dia = addZero(data.getDate());
  let mes = addZero(Number(data.getMonth())+1);
  let ano = addZero(data.getFullYear());

  return `${dia}-${mes}-${ano}`;
}

export function geraDataUso() {
  let data = new Date();
  let dia = addZero(data.getDate());
  let mes = addZero(Number(data.getMonth())+1);
  let hora = addZero(data.getHours());
  let min = addZero(data.getMinutes());

 return `| ${dia}-${mes} | ${hora}:${min}`;
}