export default function geraData(){
  let data = new Date();
  let dia = addZero(data.getDate());
  let mes = addZero(Number(data.getMonth())+1);
  let ano = addZero(data.getFullYear());

  function addZero(num) {
    return num >= 10 ? num : `0${num}`;
  }

  return `${dia}-${mes}-${ano}`;
}