//Funciones
//Declaracion de Funcion

function sumar(){
    console.log(10 + 10);
}
//Llamada de funcion
sumar();
//Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();
//Forma IIFE, se manadan a llamar ellas mismas, sirve para proteger las variables y no se mezclen con otro archivo
(function(){ //previene que no se puedan acceder en otros archivos
    console.log("Esto es una funcion");
})();
console.log(clienteNombre); //Declaracion en archivo otro.js
console.log(clienteNombre2); //Declaracion protegida mediante IIFE en archivo otro.js