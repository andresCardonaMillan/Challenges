//ARROW AND REGULAR FUNTIONS
//REGULAR
function verificarParImparRegular(numero) {
    if(numero % 2 === 0) {
      console.log(numero + " es un número par");
    } else {
      console.log(numero + " es un número impar");
    }
  }
  
  verificarParImparRegular(200);

//TIPO FELCHA
const verificarParImparFlecha = (numero) => {
    if(numero % 2 === 0) {
      console.log(numero + " es un número par");
    } else {
      console.log(numero + " es un número impar");
    }
  }
  
  verificarParImparFlecha(7);