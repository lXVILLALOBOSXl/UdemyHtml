//Funciones con parametros y argumentos


//Declaracion de Funcion
function sumar(numero1, numero2){ //numero1 y numero2 son los parametros de la funcion
    console.log(numero1 + numero2);
}
//Llamada de funcion
sumar(10, 10); //1 y 4 son los argumentos de la funcion, o valores reales
sumar(5, 10);
sumar(1, 2);
sumar(3); // Error NaN por que solo senvia un parametro

//Expresion de la funcion
const sumar2 = function(n1 = 0, n2 = 0){ //Parametros por default, si no se envian los arguemntos necesarios, el parametro toma el valor por default
    console.log(n1 + n2);
}
//Llamada de funcion
sumar2(100); //no Error