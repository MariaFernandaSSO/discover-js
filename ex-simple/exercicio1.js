let temp = 21

if(temp >= 20 ){
  console.log('temperatura daora')
}else{
  console.log('temperatura triste')
}

let cal = () => {
  let resultado = 'b';

  switch (resultado){
    case 'a':
      //codigo
      resultado = 'a'
      break;
    case 'b':
      resultado = 'b1'
      break;
      default:
        console.log(resultado)
        break;
  }

  return resultado
}

console.log(cal())
