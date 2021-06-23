//Diferencia entre metodo y funcion

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //parseInt() es una funcion
console.log(numero1.toString()); //.toString() es un metodo

//La diferencia es que un metodo es una funcion pertenenciente a una clase y solo puede llmarse mediante una instancia, y la funcion no requiere de la instancia parra lamarlo