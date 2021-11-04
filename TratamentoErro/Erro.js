// Tratamento de erros

function retornaHora(data) {
  if (data && !(data instanceof Date)){
    throw new TypeError('Esperando instância de Date.');
  }

  if(!data) {
    data = new Date();
  }
              
  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}
try{
  const data = new Date('01-01-1970 12:58:12')
  const hora = retornaHora();
  console.log(hora);

} catch(e) {
  // tratar errro
} finally {
  console.log('Tenha um bom dia.');
}


/*
let num=13 ;

try{
  console.log(a);
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');

}catch(e){
  console.log("Tratando o erro " + e.message)
}finally{
  console.log("Sou sempre executado")
}


function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new ReferenceError('x e y precisam ser números.')
  }
  return x + y;
}

try {
  console.log(soma(1,2));
  console.log(soma("1",2));

} catch(e) {
  console.log(e);
}
*/
