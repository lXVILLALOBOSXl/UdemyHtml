//Dferencias entre expresion y llamada de funcion
//La diferencia entre la declaración y la expresión es que, en la expresion solo puede ser llamada después de declararla y en la declaracion puede llamarse antes de haber sido declarada

//Llamada de funcion
sumar(); //No error
//Declaracion de Funcion
function sumar(){
    console.log(10 + 10);
}

//Llamada de funcion
sumar2(); //Error
//Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}
